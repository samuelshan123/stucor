import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompletedFormsPage } from './completed-forms.page';

const routes: Routes = [
  {
    path: '',
    component: CompletedFormsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompletedFormsPageRoutingModule {}
