import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public URL = "http://localhost:8100/api/";

public POST_URL:any={
  LOGIN:this.URL+"login",
  GET_STUDENTS:this.URL+"getstudents",
  REQUEST:this.URL+"request",
  GET_REQUESTS:this.URL+"getrequests",
  ACTIONS:this.URL+"action",
  NOTIFICATIONS:this.URL+"notifications",
  HOD_APPROVED:this.URL+"hodApproved",
  COMPLETED:this.URL+"completed",
  INCHARGE_INQUIRY:this.URL+"inchargeInquiry",
  HOD_INQUIRY:this.URL+"hodInquiry",
  ACTIONS_REQUIRED:this.URL+"actionsRequired",
  STUDENT_HACTION:this.URL+"studentHaction",
  STUDENTIACTION:this.URL+"studentIaction",
  PRINCIPAL_APPROVED:this.URL+"principalApproved",

  // student:this.URL+"studentLogin",

}



  constructor(private http:HttpClient) { }

  public Post(url,data){
    return this.http.post(url,data);
  }

  // public getStudents(url,data){
  //   return this.http.post(url,data);
  // }
}
