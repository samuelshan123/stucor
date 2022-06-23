import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeaveFormPageRoutingModule } from './leave-form-routing.module';

import { LeaveFormPage } from './leave-form.page';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeaveFormPageRoutingModule,
    ReactiveFormsModule,
    NgxSpinnerModule
    
  
  ],
  declarations: [LeaveFormPage]
})
export class LeaveFormPageModule {}
