import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompletedGatePassPageRoutingModule } from './completed-gate-pass-routing.module';

import { CompletedGatePassPage } from './completed-gate-pass.page';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompletedGatePassPageRoutingModule,
    NgxQRCodeModule
  ],
  declarations: [CompletedGatePassPage]
})
export class CompletedGatePassPageModule {}
