import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public Role:any=localStorage.getItem('role');
  public userData:any=JSON.parse(localStorage.getItem('user'));
  public pages:any[]=[
    {title: 'About us', url:'/about',icon:'information-circle'},
    {title: 'Privacy policy', url:'/privacy',icon:'document-lock'},
    {title: 'Sign Out', url:'',icon:'log-out',route: false},
  ]
  constructor() {}

}
