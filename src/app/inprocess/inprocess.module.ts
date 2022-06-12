import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InprocessPageRoutingModule } from './inprocess-routing.module';

import { InprocessPage } from './inprocess.page';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InprocessPageRoutingModule,
    NgxQRCodeModule
  ],
  declarations: [InprocessPage]
})
export class InprocessPageModule {}
