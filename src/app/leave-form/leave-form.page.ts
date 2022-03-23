import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.page.html',
  styleUrls: ['./leave-form.page.scss'],
})
export class LeaveFormPage implements OnInit {
  leaveForm: FormGroup;
  submitted = false;
  isDate: boolean = true;

  constructor(private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit() {
      this.leaveForm = this.formBuilder.group({
        date: ['', Validators.required],
        type: ['true', Validators.required],
        reason: ['', Validators.required],
     
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

        let payload={
          user_id:1,
          description:JSON.stringify(this.leaveForm.value),
          status:'faculty',
          created_at:Date.now()
        }
     console.log(JSON.parse(payload.description));
         
  
        }
    }
  }