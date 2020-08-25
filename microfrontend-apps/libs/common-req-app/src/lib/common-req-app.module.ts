import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PrListModule} from "./pr-list/pr-list.module";

@NgModule({
  imports: [CommonModule, PrListModule],
  declarations: [],
  exports: [PrListModule],
})
export class CommonReqAppModule {
}
