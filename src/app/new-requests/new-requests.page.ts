import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../services/api.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-new-requests',
  templateUrl: './new-requests.page.html',
  styleUrls: ['./new-requests.page.scss'],
})
export class NewRequestsPage implements OnInit {

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
      
    this.api.Post(this.api.POST_URL.GET_REQUESTS,payload).subscribe((res:any)=>{
      if(res.status=='success'){
        console.log(res);
        
        this.spinner.hide();
        
        for (let i = 0; i < res.requests.length; i++) {
          let details ={
            id:res.requests[i].id,
            name:res.requests[i].name,
            regno:res.requests[i].regno,
            department:res.requests[i].department,
            semester:res.requests[i].semester,
            year:res.requests[i].year,
            description:JSON.parse(res.requests[i].description),
            requested_at:res.requests[i].requested_at,
            form_type:res.requests[i].form_type,
          }
          this.Requests.push(details);
          console.log(details);
          
          console.log(this.Requests);
        }
       
      }else{
        this.spinner.hide();
        this.toaster.warning('No New Requests');
      }
    });

  }

  viewData(d){
    console.log(d);
    
    this.dataservice.data=d;
    this.router.navigate(['/view-details']);

  }

}
