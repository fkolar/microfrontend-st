import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {loadRemoteModule} from '../federation-utils';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'

    // loadChildren: () => loadRemoteModule({
    //   remoteEntry: 'http://localhost:3000/remoteEntry.js',
    //   remoteName: 'mfe1',
    //   exposedModule: './CommonReq'
    // }).then(m => {
    //
    //   console.log('m.PrListModule: ', m.PrListModule);
    //
    //   return m.PrListModule;
    //
    // })
  }

];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
