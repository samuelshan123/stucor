import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
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
  public Form:FormGroup;

  public Data: any;
  public role:any;

  public isStaff:boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private toaster: ToastrService,
    private spinner: NgxSpinnerService,
    private http: HttpClient,
    private router:Router
  ) {}

  ngOnInit() {

    this.role="student";
    this.myForm = this.formBuilder.group({
      regno: ['', [Validators.required, Validators.minLength(10)]],
      dob: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(0[1-9]|[12][0-9]|3[01])[/.](0[1-9]|1[012])[/.](19|20)\\d\\d$'
          ),
        ],
      ],
    });

  }


 public userType(type){
    this.submitted = false;

    this.isStaff = !this.isStaff;

    this.role=type;

    if (type==='staff') {

      this.myForm.removeControl('dob');
      this.myForm.removeControl('regno');

      this.myForm.addControl('email', new FormControl('', [Validators.required, Validators.email]));
      this.myForm.addControl('password', new FormControl('', [Validators.required, Validators.minLength(6)]));
    }
    else if(type==='student'){

      this.myForm.removeControl('email');
      this.myForm.removeControl('password');

      this.myForm.addControl('dob', new FormControl('', [Validators.required, Validators.pattern('^(0[1-9]|[12][0-9]|3[01])[/.](0[1-9]|1[012])[/.](19|20)\\d\\d$')]));
      this.myForm.addControl('regno', new FormControl('', [Validators.required, Validators.minLength(10)]));
 
  }

  }


  public get errorCtr() {
    return this.myForm.controls;
  }

  public onSubmit() {
    this.submitted = true;
    if (!this.myForm.valid) {
      // this.getData();
      console.log('invalid');

      return false;
    } else {
      this.spinner.show();
      this.submitted = false;
      console.log(this.myForm.value);

      let payload = {
        formdata:this.myForm.value,
        role: this.role,
      }
      console.log(this.role);


      this.api.login(this.api.POST_URL.LOGIN,payload).subscribe((res: any) => {

        console.log(res);

        if (res.status === 'success') {
          this.spinner.hide();
          this.toaster.success('Login Successfull');
          console.log(res.user[0].role);
          localStorage.setItem('role', res.user[0].role);
          localStorage.setItem('user',JSON.stringify(res.user[0]));
          this.router.navigateByUrl('/home');
        } else  {
          this.spinner.hide();
          this.toaster.error('Invalid Credentials');
          console.log(res);
        }
      });
    }
  }
}
