import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  public userData:any=JSON.parse(localStorage.getItem('user'));

  Data:any;

  constructor(private api:ApiService,private spinner:NgxSpinnerService,private router:Router,private toaster:ToastrService) { }

  ngOnInit() {
    
    this.api.Post(this.api.POST_URL.NOTIFICATIONS,{id:this.userData.id}).subscribe((res:any)=>{
      if(res.status=='success'){
        console.log(res);
        this.Data=res.data;
        // this.spinner.hide();
      }else{
        this.toaster.warning('No New Notifications');

        // this.spinner.hide();
      }
    });
  }

}
