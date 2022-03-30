import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public URL = "https://unbruised-dive.000webhostapp.com/";
  constructor(private http:HttpClient) { }
// header = new HttpHeaders({
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     });

  public login(data){
    return this.http.post(this.URL+"login",data);
  }

  public getData(){
    return this.http.get(this.URL+"sdsRetrivePrayer.php");
  }
}
