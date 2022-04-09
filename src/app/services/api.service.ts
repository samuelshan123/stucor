import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public URL = "http://localhost:8100/api/";

public POST_URL:any={
  LOGIN:this.URL+"login",
  // student:this.URL+"studentLogin",

}



  constructor(private http:HttpClient) { }
// header = new HttpHeaders({
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     });

  public login(url,data){
    return this.http.post(url,data);
  }

  // public getData(){
  //   return this.http.get(this.URL+"sdsRetrivePrayer.php");
  // }
}
