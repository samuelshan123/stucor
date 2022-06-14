import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-scan-qr',
  templateUrl: './scan-qr.page.html',
  styleUrls: ['./scan-qr.page.scss'],
})
export class ScanQrPage implements OnInit {
  scannedData: any;
  encodedData: '';
  encodeData: any;
  inputData: any;

  data: any;
  constructor(private barcodeScanner: BarcodeScanner,private toaster:ToastrService,public spinner:NgxSpinnerService,
    private api:ApiService,private router:Router) { }
  ngOnInit(): void {
    console.log(JSON.parse(localStorage.getItem('user')).id);
    
    this.scanBarcode() 
   }
  scanBarcode() {
    const options: BarcodeScannerOptions = {
      preferFrontCamera: false,
      showFlipCameraButton: true,
      showTorchButton: true,
      torchOn: false,
      prompt: 'Place a barcode inside the scan area',
      resultDisplayDuration: 500,
      formats: 'EAN_13,EAN_8,QR_CODE,PDF_417 ',
      orientation: 'portrait',
    };

    this.barcodeScanner.scan(options).then((barcodeData:any) => {
      // this.toaster.success('Barcode data', barcodeData.text);
      // const data=JSON.stringify(barcodeData.text);
      // this.toaster.success('Barcode data', data);
      // this.extarctedData=JSON.parse(data);
      // this.toaster.success( 'Barcode data', barcodeData.text);
 

        if(barcodeData.text!=null||barcodeData.text!=undefined ||barcodeData.text!=''){
          let payload={
            request_id:barcodeData.text
          }
this.spinner.show();
        this.api.Post(this.api.POST_URL.VERIFY_CHECK_FORM,payload).subscribe((res:any)=>{
          if(res.status=='success'){
            let payload={
              request_id:barcodeData.text,
              security_id:JSON.parse(localStorage.getItem('user')).id,
              checked_at:Date.now(),
              status:'CO'
            }
      
          this.api.Post(this.api.POST_URL.CHECK_OUT,payload).subscribe((res:any)=>{
            if(res.status=='success'){
              this.spinner.hide();
              this.data=res.data;
              this.toaster.success('Success','Verified Successfully',{
                timeOut:3000,
              });
    this.router.navigateByUrl('/home');
            }
            else{
              this.spinner.hide();
              this.toaster.error('Error',res.status);
            }
          })
          }
          else{
            this.spinner.hide();
            this.toaster.error('Form not verified');
          }
        })

        
      console.log('Barcode data', barcodeData);
      this.scannedData = barcodeData;
    }
    else{
      this.toaster.error('Error','Something went wrong');
    }

    }).catch(err => {
      console.log('Error', err);
    });
  }

  // createBarcode() {
  //   this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.inputData).then((encodedData) => {
  //     console.log(encodedData);
  //     this.encodedData = encodedData;
  //   }, (err) => {
  //     console.log('Error occured : ' + err);
  //   });
  // }

}
