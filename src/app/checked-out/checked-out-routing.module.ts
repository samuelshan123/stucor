import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckedOutPage } from './checked-out.page';

const routes: Routes = [
  {
    path: '',
    component: CheckedOutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckedOutPageRoutingModule {}
