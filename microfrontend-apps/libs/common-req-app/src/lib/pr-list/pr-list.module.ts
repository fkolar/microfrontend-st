import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PrListComponent} from './pr-list.component';
import {TableModule} from '@fundamental-ngx/core';

@NgModule({
  imports: [CommonModule, TableModule],
  declarations: [PrListComponent],
  exports: [PrListComponent],
})
export class PrListModule {
}
