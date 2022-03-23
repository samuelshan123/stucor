import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InprocessPage } from './inprocess.page';

const routes: Routes = [
  {
    path: '',
    component: InprocessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InprocessPageRoutingModule {}
