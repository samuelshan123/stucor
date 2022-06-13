import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanQrPageRoutingModule } from './scan-qr-routing.module';

import { ScanQrPage } from './scan-qr.page';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanQrPageRoutingModule,
    NgxSpinnerModule


  ],
  declarations: [ScanQrPage],
  providers: [BarcodeScanner]
})
export class ScanQrPageModule {}
