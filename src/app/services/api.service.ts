import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public URL = "http://localhost:8100/api/";

public POST_URL:any={
  LOGIN:this.URL+"login",
  GET_STUDENTS:this.URL+"getstudents"
  // student:this.URL+"studentLogin",

}



  constructor(private http:HttpClient) { }

  public login(url,data){
    return this.http.post(url,data);
  }

  public getStudents(url,data){
    return this.http.post(url,data);
  }
}
