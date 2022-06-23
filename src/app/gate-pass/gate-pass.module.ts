import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GatePassPageRoutingModule } from './gate-pass-routing.module';

import { GatePassPage } from './gate-pass.page';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GatePassPageRoutingModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgxSpinnerModule

  ],
  declarations: [GatePassPage]
})
export class GatePassPageModule {}
