import { Component, OnInit } from '@angular/core';
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

  public Details:any;

  Form:any=this.dataService.inprocessData.form_type;

  constructor(private dataService:DataService) { }

  ngOnInit() {

    console.log(this.dataService.inprocessData);

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
    

  
      if (this.dataService.inprocessData.status=='AFI') {
        this.incharge=true;  
      }
      else if(this.dataService.inprocessData.status=='AFH'){
        this.incharge=true;
        this.hod=true;
        this.completed=true;
      }
        
      
      

    }

}
