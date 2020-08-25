import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonReqAppModule} from '@aribaui/common-req-app';
import {IconModule, LayoutGridModule, LayoutPanelModule, LinkModule} from '@fundamental-ngx/core';
import {ContentItemAppModule} from '@aribaui/content-item-app';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonReqAppModule,
    IconModule,
    ContentItemAppModule,
    LinkModule,
    LayoutGridModule,
    LayoutPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [LandingComponent]
})
export class AppModule {
}
