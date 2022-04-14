import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.page.html',
  styleUrls: ['./leave-form.page.scss'],
})
export class LeaveFormPage implements OnInit {
  leaveForm: FormGroup;
  submitted = false;
  isDate: boolean = true;
  public UserData: any = JSON.parse(localStorage.getItem('user'));

  constructor(private formBuilder: FormBuilder,private router:Router,public toaster:ToastrService,private api:ApiService) { }

  ngOnInit() {
    console.log(this.UserData.id);
    
      this.leaveForm = this.formBuilder.group({
        date: ['', Validators.required],
        type: ['true', Validators.required],
        reason: ['', Validators.required],
        phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
     
      });
  }

  public check(e){
    console.log(e);
    if(e.target.value=='true'){
      this.isDate = true;
      this.leaveForm.addControl('date', new FormControl('', Validators.required));
      this.leaveForm.removeControl('fromDate');
      this.leaveForm.removeControl('toDate');
}
    else if(e.target.value=='false'){
      this.isDate = false;
      this.leaveForm.removeControl('date');
      this.leaveForm.addControl('fromDate', new FormControl('', Validators.required));
      this.leaveForm.addControl('toDate', new FormControl('', Validators.required));

    }
  }
  get f() { return this.leaveForm.controls; }

  onSubmit() {
      this.submitted = true;
      if (this.leaveForm.invalid) {
          return;
      }else{

        let payload = {
          user_id: this.UserData.id,
          form_type: 'leave form',
          description: JSON.stringify(this.leaveForm.value),
          status: 'PFI',
          requested_at: Date.now(),
        }
        this.api.Post(this.api.POST_URL.REQUEST, payload).subscribe((data:any)=>{
          if(data.status === 'success'){
            this.toaster.success("Leave Request has been sent");
            this.router.navigate(['/home']);
          }else{
            this.toaster.error(data.message);
          }
        })         
  
        }
    }
  }