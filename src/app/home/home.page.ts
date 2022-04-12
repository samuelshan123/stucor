import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public Role:any='';
  // public Role:any='student';
  public userData:any=JSON.parse(localStorage.getItem('user'));
public Fields:any;

  public pages:any[]=[
    {title: 'About us', url:'/about',icon:'information-circle'},
    {title: 'Privacy policy', url:'/privacy',icon:'document-lock'},
    {title: 'Sign Out', url:'',icon:'log-out',route: false},
  ]

  public student_board:any=[
    {title: 'Gate Pass', url:'/gate-pass',icon:'person'},
    {title: 'Leave Form', url:'/leave-form',icon:'person'},
    {title: 'Form Status', url:'/notifications',icon:'person'},
    {title:'Notifications',url:'/notifications',icon:'person'},
    {title:'Completed Forms',url:'/completed',icon:'person'},
    {title:'Actions',url:'/notifications',icon:'person'},
  ]

  public staff_board:any=[
    {title: 'New Requests', url:'/new-requests',icon:'person'},
    {title:'Completed Forms',url:'/notifications',icon:'person'},
    {title:'Actions',url:'/notifications',icon:'person'},
  ]
  constructor(private router:Router,private menu:MenuController) {
    this.Role=localStorage.getItem('role');
  }

  ngOnInit() {
    console.log(this.Role);
    
    
    if(this.Role=='student'){
      this.Fields=this.student_board;
    }else if(this.Role=='in-charge'){
      this.Fields=this.staff_board;
    }
    else if(this.Role=='hod'){
      this.Fields=this.staff_board;
    }
  }

  public logout(){
    this.Role='';
    this.Fields=[];
    localStorage.clear();
    this.menu.close();
    this.router.navigateByUrl('/login');
  }

}
