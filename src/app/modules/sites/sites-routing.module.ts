import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteListComponent } from './pages/site-list/site-list.component';
import { AddSiteComponent } from './pages/add-site/add-site.component';
import { EditSiteComponent } from './pages/edit-site/edit-site.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: SiteListComponent,
      },
      {
        path: 'add',
        component: AddSiteComponent,
      },
      {
        path: 'edit/:id',
        component: EditSiteComponent,
      },
    ],
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SitesRoutingModule {}
