import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GatePassPageRoutingModule } from './gate-pass-routing.module';

import { GatePassPage } from './gate-pass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GatePassPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [GatePassPage]
})
export class GatePassPageModule {}
