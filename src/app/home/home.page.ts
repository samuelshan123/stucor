import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public Role:any=localStorage.getItem('role');;
  // public Role:any='student';
  public userData:any=JSON.parse(localStorage.getItem('user'));
public Fields:any;

  public pages:any[]=[
    // {title: 'About us', url:'/about',icon:'information-circle'},
    // {title: 'Privacy policy', url:'/privacy',icon:'document-lock'},
    // {title: 'Sign Out', url:'',icon:'log-out',route: false},
  ]

  public student_board:any=[
    {title: 'Gate Pass', url:'/gate-pass',icon:'clipboard'},
    {title: 'Leave Form', url:'/leave-form',icon:'clipboard'},
    {title: 'Form Status', url:'/form-status',icon:'hourglass'},
    {title:'Notifications',url:'/notifications',icon:'notifications'},
    // {title:'Check out',url:'/completed-gate-pass',icon:'walk'},
    {title:'Checked out',url:'/checked-out',icon:'walk'},

    {title:'Completed Forms',url:'/completed',icon:'checkmark-circle-outline'},
    // {title:'Actions',url:'/notifications',icon:'person'},
  ]

  public staff_board:any=[
    {title: 'New Requests', url:'/new-requests',icon:'person'},
    {title:'Completed Forms',url:'/completed',icon:'checkmark-circle-outline'},
    {title:'Actions',url:'/actions',icon:'alert'},
    {title:'Checked out',url:'/checked-out',icon:'exit'},

  ]

  public principal_board:any=[
    {title: 'New Requests', url:'/new-requests',icon:'person'},
    {title:'Checked out',url:'/checked-out',icon:'exit'},
  ]

  public security_board:any=[
    {title:'Scan QR Code',url:'/scan-qr',icon:'qr-code-outline'},
    {title:'Checked out',url:'/checked-out',icon:'exit'},

  ]
  constructor(private router:Router,private menu:MenuController) {
    
     
    if(this.Role=='student'){
      this.Fields=this.student_board;
    }else if(this.Role=='in-charge'){
      this.Fields=this.staff_board;
    }
    else if(this.Role=='hod'){
      this.Fields=this.staff_board;
    }
    else if(this.Role=='principal'){
      this.Fields=this.principal_board;
    }
    else if(this.Role=='security'){
      this.Fields=this.security_board;
    }
  }

  ngOnInit() {
    console.log(this.Role);
    
   
  }

  public logout(){
    this.Role='';
    this.Fields=[];
    window.localStorage.clear();
    this.menu.close();
    this.router.navigateByUrl('/login');
  }

}
