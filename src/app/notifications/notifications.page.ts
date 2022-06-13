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
  PrincipalApproved:any=[];

  constructor(private api:ApiService,private spinner:NgxSpinnerService,
    private router:Router,private toaster:ToastrService,private dataService:DataService) { }

  ngOnInit() {

    console.log(this.userData.id);

// principal approved
this.api.Post(this.api.POST_URL.PRINCIPAL_APPROVED,{id:this.userData.id}).subscribe((res:any)=>{
  if(res.status=='success'){
    // for (let i = 0; i < res.data.length; i++) {
    //   let details = {
    //     id: res.data[i].id,
    //     status: res.data[i].status,
    //     request_id: res.data[i].request_id,
    //     name: res.data[i].name,
    //     regno: res.data[i].regno,
    //     department: res.data[i].department,
    //     semester: res.data[i].semester,
    //     year: res.data[i].year,
    //     description: JSON.parse(res.data[i].description),
    //     pactioned_at: res.data[i].pactioned_at,
    //     form_type: res.data[i].form_type,
    //   };
    //   this.PrincipalApproved.push(details);
    //   console.log(details);
    // }
    this.PrincipalApproved=res.data;

  }
  else{
    this.PrincipalApproved=[];
  }
})


    // hod inqury
    this.api.Post(this.api.POST_URL.HOD_INQUIRY,{id:this.userData.id}).subscribe((res:any)=>{
      if(res.status=='success'){
        console.log(res);
        this.hodEnquiry=res.data;
        console.log(this.HodApproved);
      }else{
        // this.toaster.error(res.message);
      }
    })

    // incharge inquire
    this.api.Post(this.api.POST_URL.INCHARGE_INQUIRY,{id:this.userData.id}).subscribe((res:any)=>{
      if(res.status=='success'){
        console.log(res.data);
        this.Enquiry=res.data;
        // console.log(this.Data);
      }else{
        // this.toaster.error(res.message);
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
        request_id:value.request_id,
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
        
        positionClass:'toast-center-center',
        closeButton:true,
        timeOut:4000,
      
      });
    }
    else if(e==='h'){
      this.toaster.error("Please meet your HOD","Enquiry Required",{
        
        positionClass:'toast-center-center',
        closeButton:true,
        timeOut:4000,
      
      });
    }
    

  }

}
