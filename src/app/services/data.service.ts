import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public data:any=[]
  public inprocessData:any
  public Form_Title:any;



  constructor() { }
}
