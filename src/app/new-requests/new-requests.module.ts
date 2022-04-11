import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewRequestsPageRoutingModule } from './new-requests-routing.module';

import { NewRequestsPage } from './new-requests.page';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewRequestsPageRoutingModule,
    NgxSpinnerModule
  ],
  declarations: [NewRequestsPage],
  providers: [DatePipe]
})
export class NewRequestsPageModule {}
