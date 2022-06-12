import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompletedGatePassPage } from './completed-gate-pass.page';

const routes: Routes = [
  {
    path: '',
    component: CompletedGatePassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompletedGatePassPageRoutingModule {}
