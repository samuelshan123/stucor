import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GatePassPage } from './gate-pass.page';

const routes: Routes = [
  {
    path: '',
    component: GatePassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GatePassPageRoutingModule {}
