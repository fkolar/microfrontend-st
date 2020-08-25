import {NgModule} from '@angular/core';
import {ItemPageComponent} from './item-page.component';
import {RouterModule, Routes} from '@angular/router';

const APP_ROUTES: Routes = [
  {path: 'item-detail', component: ItemPageComponent}
];


@NgModule({
  imports: [
    RouterModule.forChild(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ],
})
export class ItemPageRoutingModule {
}
