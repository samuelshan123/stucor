import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.page.html',
  styleUrls: ['./view-details.page.scss'],
})
export class ViewDetailsPage implements OnInit {

Details:any;

  constructor() { }

  ngOnInit() {
 
    var faculty = [
      {key:"Name",value:"Ashik"},
      {key:"Register Nummber",value:"963518104036"},
      {key:"Department",value:"CSE"},
      {key:"Year",value:"4"},
      {key:"Leave type",value:"single"},
      {key:"Date",value:"12/12/2019"},
      {key:"Guardian phone",value:"963518104036"},
      {key:"Reason",value:"I am sick"},
    ]
    this.Details=faculty;

  }



}
