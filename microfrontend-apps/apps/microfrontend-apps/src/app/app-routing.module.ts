import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './landing/landing.component';

const routes: Routes = [
  {
    path: '', component: LandingComponent,
    loadChildren: () => import('@aribaui/common-req-app').then(m => m.PrListModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
