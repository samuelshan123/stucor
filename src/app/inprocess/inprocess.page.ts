import { Component, OnInit } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-inprocess',
  templateUrl: './inprocess.page.html',
  styleUrls: ['./inprocess.page.scss'],
})
export class InprocessPage implements OnInit {

  incharge:boolean=false;
  hod:boolean=false;
  principal:boolean=false;
  completed:boolean=false;
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  public value:any ;
  public Details:any;
  public status:any;

  Form:any=this.dataService.inprocessData.form_type;

  constructor(public dataService:DataService) { }

  ngOnInit() {
    this.value=`${this.dataService.inprocessData.request_id}`;   
    console.log(this.value);
     
    
    console.log(this.dataService.inprocessData);
    this.status=this.dataService.inprocessData.status;

    if(this.dataService.inprocessData.form_type=='leave form'){
      
      if (this.dataService.inprocessData.description.type==='true') {
        // data.push({name:"No of Days",value:'single'});
        var data=[
          {name:"Form Type",value:this.dataService.inprocessData.form_type},
          {name:"No of Days",value:'single'},
          {name:"Leave Date",value:this.dataService.inprocessData.description.date},
          {name:"Reason",value:this.dataService.inprocessData.description.reason},
          {name:"Approved By",value:this.dataService.inprocessData.name},


          // {name:""}
        ]
        this.Details=data;

      }
        
      } if(this.dataService.inprocessData.description.type==='false'){
        var data=[
          {name:"Form Type",value:this.dataService.inprocessData.form_type},
          {name:"No of Days",value:'Multiple'},
          {name:"Leave From",value:this.dataService.inprocessData.description.fromDate},
          {name:"Leave To",value:this.dataService.inprocessData.description.toDate},
          {name:"Reason",value:this.dataService.inprocessData.description.reason},
          {name:"Approved By",value:this.dataService.inprocessData.name},
        ]
        this.Details=data;
      
    }
    else if(this.dataService.inprocessData.form_type==='gate pass' && this.dataService.inprocessData.description.type==='true') {
      var gatePass = [
        // {name:"Name",value:this.dataService.inprocessData.name},
        // {name:"Register Number",value:this.dataService.inprocessData.regno},
        // {name:"Department",value:this.dataService.inprocessData.department},
        // {name:"Year",value:this.dataService.inprocessData.year},
        {name:"Form Type",value:this.dataService.inprocessData.form_type},
        {name:"Gate Pass For",value:'Myself'},
        // {name:"Leave Date",value:this.data.description.date},
        {name:"Description",value:this.dataService.inprocessData.description.reason},
        {name:"Approved By",value:this.dataService.inprocessData.name},
      ]
      this.Details=gatePass;
      
    }
     if(this.dataService.inprocessData.form_type==='gate pass' && this.dataService.inprocessData.description.type==='false') {
      console.log(this.dataService.inprocessData.description.students);
      

      var students=" ";
      for(let i = 0; i < this.dataService.inprocessData.description.students.length; i++) {
        students += this.dataService.inprocessData.description.students[i].name + ", ";
      }
      
      var gatePass = [
        // {name:"Name",value:this.dataService.inprocessData.name},
        // {name:"Register Number",value:this.dataService.inprocessData.regno},
        // {name:"Department",value:this.dataService.inprocessData.department},
        // {name:"Year",value:this.dataService.inprocessData.year},
        {name:"Form Type",value:this.dataService.inprocessData.form_type},
        {name:"Gate Pass For",value:'My Group'},
        {name:"No of Students",value:this.dataService.inprocessData.description.students.length},
        {name:"Students",value:students},
        // {name:"Leave Date",value:this.data.description.date},
        {name:"Description",value:this.dataService.inprocessData.description.reason},
        {name:"Approved By",value:this.dataService.inprocessData.name},
      ]
      this.Details=gatePass;
      
    }

    

  
      if (this.dataService.inprocessData.form_type==='leave form' && this.dataService.inprocessData.status=='AFI') {
        this.incharge=true;  
      }
      else if(this.dataService.inprocessData.form_type==='leave form' && this.dataService.inprocessData.status=='AFH'){
        this.incharge=true;
        this.hod=true;
        this.completed=true;
      }
        
      else if(this.dataService.inprocessData.form_type==='gate pass' && this.dataService.inprocessData.status=='AFI'){
        this.incharge=true;
        // this.hod=true;
        // this.principal=true;
        // this.completed=true;
      }
      else if(this.dataService.inprocessData.form_type==='gate pass' && this.dataService.inprocessData.status=='AFH'){
        this.incharge=true;
        this.hod=true;
        // this.principal=true;
        // this.completed=true;
      }
      else if(this.dataService.inprocessData.form_type==='gate pass' && this.dataService.inprocessData.status=='completed'){
        this.incharge=true;
        this.hod=true;
        this.principal=true;
        this.completed=true;
      }
      
      

    }

}
