import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  }
  // {
  //   path: 'flights',
  //   loadChildren: () => loadRemoteModule({
  //       remoteEntry: 'http://localhost:3000/remoteEntry.js',
  //       remoteName: 'mfe1',
  //       exposedModule: 'Module'
  //     })
  //     .then(m => m.FlightsModule)
  // },
  // {
  //   path: 'bookings',
  //   loadChildren: () => loadRemoteModule({
  //       remoteEntry: 'http://localhost:3001/remoteEntry.js',
  //       remoteName: 'mfe2',
  //       exposedModule: 'Module'
  //     })
  //     .then(m => m.BookingsModule)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
