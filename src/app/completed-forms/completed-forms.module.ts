import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompletedFormsPageRoutingModule } from './completed-forms-routing.module';

import { CompletedFormsPage } from './completed-forms.page';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompletedFormsPageRoutingModule,
    NgxSpinnerModule
  ],
  declarations: [CompletedFormsPage]
})
export class CompletedFormsPageModule {}
