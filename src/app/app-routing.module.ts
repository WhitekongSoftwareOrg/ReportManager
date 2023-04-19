import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { BrowserModule } from '@angular/platform-browser';

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
        loadChildren: () =>
          import('./modules/sites/sites.module').then((m) => m.SitesModule),
      },
      {
        path: 'sites',
        loadChildren: () =>
          import('./modules/sites/sites.module').then((m) => m.SitesModule),
      },
      {
        path: 'types',
        loadChildren: () =>
          import('./modules/types/types.module').then((m) => m.TypesModule),
      },
      {
        path: 'groups',

        loadChildren: () =>
          import('./modules/group/group.module').then((m) => m.GroupModule),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./modules/users/users.module').then((m) => m.UsersModule),
      },
      {
        path: 'reports',
        loadChildren: () =>
          import('./modules/reports/reports.module').then(
            (m) => m.ReportsModule
          ),
      },
      {
        path: 'email-list',
        loadChildren: () =>
          import('./modules/mail-list/mail-list.module').then(
            (m) => m.MailListModule
          ),
      },
      {
        path: 'security',
        loadChildren: () =>
          import('./modules/security/security.module').then(
            (m) => m.SecurityModule
          ),
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
  imports: [BrowserModule, RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
