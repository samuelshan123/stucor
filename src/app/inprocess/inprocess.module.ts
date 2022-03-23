import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InprocessPageRoutingModule } from './inprocess-routing.module';

import { InprocessPage } from './inprocess.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InprocessPageRoutingModule
  ],
  declarations: [InprocessPage]
})
export class InprocessPageModule {}
