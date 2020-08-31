import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {PluginProxyComponent} from './plugins/plugin-proxy.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
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
