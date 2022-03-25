import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public URL = "http://localhost:8100/api/";
  constructor(private http:HttpClient) { }

  public login(data){
    return this.http.post(this.URL+"login",data);
  }
}
