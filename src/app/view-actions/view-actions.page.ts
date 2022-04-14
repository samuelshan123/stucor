import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../services/api.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-view-actions',
  templateUrl: './view-actions.page.html',
  styleUrls: ['./view-actions.page.scss'],
})
export class ViewActionsPage implements OnInit {
  public Role:any=localStorage.getItem('role');
  // public Role:any='student';
  public userData:any=JSON.parse(localStorage.getItem('user'));
Details:any;
data:any=this.dataservice.data;
public Title=""
constructor(private dataservice:DataService,private api:ApiService,private router:Router,private toaster:ToastrService) { }

  ngOnInit() {
    this.Title=this.data.form_type;

    if (this.data.form_type==='leave form' && this.data.description.type==='true') {
      var leaveForm = [
        {key:"Name",value:this.data.name},
        {key:"Register Number",value:this.data.regno},
        {key:"Department",value:this.data.department},
        {key:"Year",value:this.data.year},
        {key:"No of Days",value:'single'},
        {key:"Leave Date",value:this.data.description.date},
        {key:"Guardian phone",value:this.data.description.phone},
        {key:"Reason",value:this.data.description.reason},
      ]
      this.Details=leaveForm;
      
    } else if(this.data.form_type==='leave form' && this.data.description.type==='false') {
      var leaveForm = [
        {key:"Name",value:this.data.name},
        {key:"Register Number",value:this.data.regno},
        {key:"Department",value:this.data.department},
        {key:"Year",value:this.data.year},
        {key:"No of Days",value:'Multiple'},
        {key:"Leave From",value:this.data.description.fromDate},
        {key:"Leave To",value:this.data.description.toDate},
        {key:"Guardian phone",value:this.data.description.phone},
        {key:"Reason",value:this.data.description.reason},
      ]
      this.Details=leaveForm;
      
    }
    else if(this.data.form_type==='gate pass' && this.data.description.type==='true') {
      var gatePass = [
        {key:"Name",value:this.data.name},
        {key:"Register Number",value:this.data.regno},
        {key:"Department",value:this.data.department},
        {key:"Year",value:this.data.year},
        {key:"Gate Pass For",value:'Myself'},
        // {key:"Leave Date",value:this.data.description.date},
        {key:"Description",value:this.data.description.reason},
      ]
      this.Details=gatePass;
      
    }
    else if(this.data.form_type==='gate pass' && this.data.description.type==='false') {
      console.log(this.data.description.students);
      

      var students=" ";
      for(let i = 0; i < this.data.description.students.length; i++) {
        students += this.data.description.students[i].name + ", ";
      }
      
      var gatePass = [
        {key:"Name",value:this.data.name},
        {key:"Register Number",value:this.data.regno},
        {key:"Department",value:this.data.department},
        {key:"Year",value:this.data.year},
        {key:"Gate Pass For",value:'My Group'},
        {key:"No of Students",value:this.data.description.students.length},
        {key:"Students",value:students},
        // {key:"Leave Date",value:this.data.description.date},
        {key:"Description",value:this.data.description.reason},
      ]
      this.Details=gatePass;
      
    }


   
   
    console.log(this.Details);
    

  }

  click(e){

    if (e==='y' && this.Role==='in-charge') {
      let payload={
        status:'AFI',
        incharge_id:this.userData.id,
        iactioned_at:Date.now(),
        id:this.data.id,
        role:this.Role,
        request_id:this.data.request_id

      }
      console.log('approved by ', this.userData.name);
      this.updateForm(payload);
      
    }
    else if(e=='y'&& this.Role==='hod'){
      let payload={
        status:'AFH',
        hod_id:this.userData.id,
        hactioned_at:Date.now(),
        id:this.data.id,
        role:this.Role,
        request_id:this.data.request_id

      }
      console.log('approved by ', this.userData.name);
      this.updateForm(payload);

    }

  }

  updateForm(payload){
    this.api.Post(this.api.POST_URL.ACTIONS,payload).subscribe((res:any)=>{
      if(res.status=='success'){
        // this.toaster.success('Request Approved');
        this.router.navigate(['/home']);
      }else{
        this.toaster.error('Something went wrong');
      }
    });
  }


}
