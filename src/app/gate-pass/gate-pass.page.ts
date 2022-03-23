import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gate-pass',
  templateUrl: './gate-pass.page.html',
  styleUrls: ['./gate-pass.page.scss'],
})
export class GatePassPage implements OnInit {
  acForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit() {
      this.acForm = this.formBuilder.group({
          price: ['', Validators.required],
          capacity: ['', Validators.required],
          address: ['', Validators.required],
     
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.acForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.acForm.invalid) {
          return;
      }else{
     console.log(this.acForm.value);
         
  
        }
  
    }
  }