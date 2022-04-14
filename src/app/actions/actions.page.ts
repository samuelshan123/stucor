import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.page.html',
  styleUrls: ['./actions.page.scss'],
})
export class ActionsPage implements OnInit {
  public Details:any=[];
  public Iaction:any=[]
  public Haction:any=[];

  public Role:any=localStorage.getItem('role');
  // public Role:any='student';
  public userData:any=JSON.parse(localStorage.getItem('user'));
  // Form:any=this.dataService.inprocessData.form_type;

  // isHide:boolean=false;

  constructor(private dataService:DataService,private api:ApiService,private router:Router) { }
  ngOnInit() {

if (this.Role==='student') {

  let payload={
    department:this.userData.department,
    semester:this.userData.semester,
  }

this.api.Post(this.api.POST_URL.STUDENTIACTION,payload).subscribe((res:any)=>{
  if(res.status=='success'){
    console.log(res);
    this.Iaction=res.data;
    console.log(this.Details);
  }else{
    // this.toaster.error(res.message);
  }
})

this.api.Post(this.api.POST_URL.STUDENTHACTION,payload).subscribe((res:any)=>{
  if(res.status=='success'){
    console.log(res);
    this.Haction=res.data;
    console.log(this.Details);
  }else{
    // this.toaster.error(res.message);
  }
})


  
} else {
  var payload
  if(this.Role==="in-charge"){

     payload={
      role:this.Role,
      department:this.userData.department,
      semester:this.userData.semester,
    }

  }

  else if(this.Role==="hod"){
      
       payload={
        role:this.Role,
        department:this.userData.department,
      }

  }
  this.api.Post(this.api.POST_URL.ACTIONS_REQUIRED,payload).subscribe((res:any)=>{
    if(res.status=='success'){
      console.log(res);
        
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
          requested_at:res.requests[i].requested_at,
          form_type:res.requests[i].form_type,
        }
        this.Details.push(details);
        console.log(details);
        
        console.log(this.Details);
      }
     
    }else{
      // this.toaster.error(res.message);
    }
  })


  // console.log(this.dataService.inprocessData);


}

   
  }
  viewData(data){
    this.dataService.data=data;
    
    this.router.navigate(['/view-actions']);
  }

}
