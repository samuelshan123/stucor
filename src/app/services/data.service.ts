import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

leaveForm:any=[
  {
   id:1,
    name:"Samuel Raj",
    dept:"cse",

  }
]

  constructor() { }
}
