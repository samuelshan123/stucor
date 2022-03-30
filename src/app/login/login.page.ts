import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  public Data: any;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private toaster: ToastrService,
    private spinner: NgxSpinnerService,
    private http: HttpClient
  ) {}

  ngOnInit() {
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

  getData() {
   this.api.getData().subscribe((res: any) => {
        // console.log(res.prayerdata[0].yname);
       
        console.log(res);
        
          this.Data =res.prayerdata[0].yname;
    
      });
  }

  public get errorCtr() {
    return this.myForm.controls;
  }

  public onSubmit() {
    this.submitted = true;
    if (!this.myForm.valid) {
      this.getData();
      console.log('invalid');

      return;
    } else {
      this.spinner.show();
      console.log(this.myForm.value);

      let payload = {
        registerno: this.myForm.value.regno,
        dob: this.myForm.value.dob,
      };
      this.api.login(payload).subscribe((res: any) => {
        if (res.length) {
          this.spinner.hide();
          this.toaster.success('Login Successful');
          console.log(res);
        } else {
          this.spinner.hide();

          this.toaster.error('Invalid Credentials');
          console.log(res);
        }
      });
    }
  }
}
