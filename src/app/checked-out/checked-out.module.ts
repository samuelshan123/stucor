import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckedOutPageRoutingModule } from './checked-out-routing.module';

import { CheckedOutPage } from './checked-out.page';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckedOutPageRoutingModule,
    NgxSpinnerModule
  ],
  declarations: [CheckedOutPage]
})
export class CheckedOutPageModule {}
