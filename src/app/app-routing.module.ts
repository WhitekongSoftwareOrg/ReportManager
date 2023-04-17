import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'top',
  scrollOffset: [0, 0],
};

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        data: { breadcrumb: '' },
        loadChildren: () =>
          import('./modules/sites/sites.module').then((m) => m.SitesModule),
      },
      {
        path: 'sites',
        pathMatch: 'full',
        data: { breadcrumb: '' },
        loadChildren: () =>
          import('./modules/sites/sites.module').then((m) => m.SitesModule),
      },
      {
        path: 'notfound',
        loadChildren: () =>
          import('./core/notfound/notfound.module').then(
            (m) => m.NotfoundModule
          ),
      },
      { path: '**', redirectTo: '/notfound' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
