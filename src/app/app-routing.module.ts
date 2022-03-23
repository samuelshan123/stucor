import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'leave-form',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'leave-form',
    loadChildren: () => import('./leave-form/leave-form.module').then( m => m.LeaveFormPageModule)
  },
  {
    path: 'gate-pass',
    loadChildren: () => import('./gate-pass/gate-pass.module').then( m => m.GatePassPageModule)
  },
  {
    path: 'inprocess',
    loadChildren: () => import('./inprocess/inprocess.module').then( m => m.InprocessPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
