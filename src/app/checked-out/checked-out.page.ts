import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../services/api.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-checked-out',
  templateUrl: './checked-out.page.html',
  styleUrls: ['./checked-out.page.scss'],
})
export class CheckedOutPage implements OnInit {

  public Role:any=localStorage.getItem('role');
  // public Role:any='student';
  public userData:any=JSON.parse(localStorage.getItem('user'));

  public Requests:any=[];
  dept: string = "cse";
  constructor(private api:ApiService,private toaster:ToastrService
    ,private spinner:NgxSpinnerService,private dataservice:DataService,private router:Router) { }

  ngOnInit() {
    console.log(this.userData);
    
    this.spinner.show();
    var payload
    if (this.Role=='in-charge') {
      payload={department:this.userData.department,semester:this.userData.semester,role:this.Role}
    } else if(this.Role==='hod'){
       payload={department:this.userData.department,role:this.Role}
    }
    else if(this.Role==='principal'||this.Role==='security'){
      payload=null
    }

      
    this.api.Post(this.api.POST_URL.CHECKED_OUT,payload).subscribe((res:any)=>{
      if(res.status=='success'){
        console.log(res);
        
        this.spinner.hide();
        
        for (let i = 0; i < res.requests.length; i++) {
          let details ={
            id:res.requests[i].id,
            request_id:res.requests[i].request_id,
            name:res.requests[i].name,
            regno:res.requests[i].regno,
            department:res.requests[i].department,
            semester:res.requests[i].semester,
            year:res.requests[i].year,
            description:JSON.parse(res.requests[i].description),
            checked_at:res.requests[i].checked_at,
            form_type:res.requests[i].form_type,
            status:res.requests[i].status,
          }
          this.Requests.push(details);
          console.log(details);
          
          console.log(this.Requests);
        }
       
      }else{
        this.spinner.hide();
        this.toaster.warning('No Checked Out ');
      }
    });

  }

  viewData(d){
    console.log(d);
    
    this.dataservice.data=d;
    this.router.navigate(['/view-details']);

  }

}
