import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Toast, ToastrService } from 'ngx-toastr';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public submitted = false;
  public myForm: FormGroup;



  constructor(private formBuilder: FormBuilder,private api:ApiService,private toaster:ToastrService) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      regno: ['',[Validators.required, Validators.minLength(10)]],
      dob: ['',[Validators.required,Validators.pattern('^(0[1-9]|[12][0-9]|3[01])[/.](0[1-9]|1[012])[/.](19|20)\\d\\d$')]],
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

      let payload={
        stu_regno:this.myForm.value.regno,
        stu_dob:this.myForm.value.dob
      }
      this.api.login(payload).subscribe((res:any)=>{
        if (res.length) {
          this.toaster.success("Login Successful",);
          console.log(res);

        } else {
          this.toaster.error("Invalid Credentials");
          console.log(res);

        }
    })
    
  }

}
  

  }
