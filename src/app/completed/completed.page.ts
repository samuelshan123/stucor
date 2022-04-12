import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../services/api.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.page.html',
  styleUrls: ['./completed.page.scss'],
})
export class CompletedPage implements OnInit {
  public userData:any=JSON.parse(localStorage.getItem('user'));
public Data:any=[];

  constructor(private api:ApiService,private spinner:NgxSpinnerService,
    private router:Router,private toaster:ToastrService,private dataService:DataService) { }

  ngOnInit() {
    //hod accepted
    this.api.Post(this.api.POST_URL.COMPLETED,{id:this.userData.id}).subscribe((res:any)=>{
      if(res.status=='success'){
        console.log(res);
        this.Data=res.data;
      }else{
        // this.toaster.error(res.message);
      }

    });
  }

}
