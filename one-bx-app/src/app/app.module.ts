import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {PluginProxyComponent} from './plugins/plugin-proxy.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IconModule, LayoutGridModule, LayoutPanelModule, LinkModule} from '@fundamental-ngx/core';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IconModule,
    LinkModule,
    LayoutGridModule,
    LayoutPanelModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PluginProxyComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
