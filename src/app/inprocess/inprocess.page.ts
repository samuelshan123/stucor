import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inprocess',
  templateUrl: './inprocess.page.html',
  styleUrls: ['./inprocess.page.scss'],
})
export class InprocessPage implements OnInit {

  hod:boolean=true;
  principal:boolean=false;
  completed:boolean=false;
  constructor() { }

  ngOnInit() {
  }

}
