import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { SharedModule } from '../shared/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    SharedModule,ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(
      {
        maxOpened: 1,
        preventDuplicates: true,
        autoDismiss: true,
        timeOut:2000
      }
      
    ),
    NgxSpinnerModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
