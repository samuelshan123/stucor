import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public submitted = false;
  public myForm: FormGroup;



  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      regno: ['',[Validators.required, Validators.minLength(10)]],
      dob: ['',[Validators.required]],
    });
  }

  
  public get errorCtr() {
    return  this.myForm.controls
  }

  public onSubmit(){

    this.submitted = true;
    if (!this.myForm.valid) {
      console.log("invalid");
      
      return;
    }
    else{
      console.log(this.myForm.value);
    }
    
  }
  

}
