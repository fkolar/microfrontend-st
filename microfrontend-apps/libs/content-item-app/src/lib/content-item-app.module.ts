import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {YourFavoritesModule} from './your-favorites/your-favorites.module';
import {ButtonModule} from '@fundamental-ngx/core';
import {ItemPageModule} from './item-page/item-page.module';


@NgModule({
  imports: [
    CommonModule,
    YourFavoritesModule,
    ButtonModule,
    ItemPageModule

  ],
  declarations: [],
  exports: [
    YourFavoritesModule,
    ItemPageModule

  ],
})
export class ContentItemAppModule {
}
