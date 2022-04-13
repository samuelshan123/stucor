import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../services/api.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  public userData:any=JSON.parse(localStorage.getItem('user'));

  Data:any=[];
  HodApproved:any=[];
  Enquiry:any=[];
  hodEnquiry:any=[];

  constructor(private api:ApiService,private spinner:NgxSpinnerService,
    private router:Router,private toaster:ToastrService,private dataService:DataService) { }

  ngOnInit() {

    console.log(this.userData.id);

    // hod inqury
    this.api.Post(this.api.POST_URL.HOD_INQUIRY,{id:this.userData.id}).subscribe((res:any)=>{
      if(res.status=='success'){
        console.log(res);
        this.hodEnquiry=res.data;
        console.log(this.HodApproved);
      }else{
        this.toaster.error(res.message);
      }
    })

    // incharge inquire
    this.api.Post(this.api.POST_URL.INCHARGE_INQUIRY,{id:this.userData.id}).subscribe((res:any)=>{
      if(res.status=='success'){
        console.log(res.data);
        this.Enquiry=res.data;
        // console.log(this.Data);
      }else{
        this.toaster.error(res.message);
      }
    });
    

    //hod accepted
    this.api.Post(this.api.POST_URL.HOD_APPROVED,{id:this.userData.id}).subscribe((res:any)=>{
      if(res.status=='success'){
        console.log(res);
        this.HodApproved=res.data;
        console.log(this.HodApproved);
      }else{
        // this.toaster.error(res.message);
      }

    });
    
    // notification
    this.api.Post(this.api.POST_URL.NOTIFICATIONS,{id:this.userData.id}).subscribe((res:any)=>{
      if(res.status=='success'){
        console.log(res);
        this.Data=res.data;
        // this.spinner.hide();
      }else{
        // this.toaster.warning('No New Notifications');
        // this.spinner.hide();
      }
    });
  }

  getData(value){
    console.log(value);
    
    // var process=[value];

    // for (let i = 0; i < value.description.length; i++) {}
              
      let datas={
        name:value.name,
        status:value.status,
        description:JSON.parse(value.description),
        form_type:value.form_type,
      }
      
      console.log(datas);
      
      this.dataService.inprocessData=datas;
      this.router.navigateByUrl('/inprocess');
      
  }

  enquiry(e){
    console.log(e);
    if (e==='i') {
      this.toaster.error("Please meet your class Incharge","Enquiry Required",{
        
        positionClass:'toast-top-center',
        closeButton:true,
        timeOut:4000,
      
      });
    }
    else if(e==='h'){
      this.toaster.error("Please meet your HOD","Enquiry Required",{
        
        positionClass:'toast-top-center',
        closeButton:true,
        timeOut:4000,
      
      });
    }
    

  }

}
