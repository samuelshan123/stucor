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
      if (this.dataService.inprocessData.status=='AFI') {
        this.incharge=true;  
      }
      else if(this.dataService.inprocessData.status=='AFH'){
        this.incharge=true;
        this.hod=true;
        this.completed=true;
      }
        
      
      var data=[
        {name:"Approved By",value:this.dataService.inprocessData.name},
        // {name:""}

      ]

    }

    this.Details=data;
    

  }

}
