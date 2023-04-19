import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SitesRoutingModule } from './sites-routing.module';
import { SiteListComponent } from './pages/site-list/site-list.component';
import { AddSiteComponent } from './pages/add-site/add-site.component';
import { EditSiteComponent } from './pages/edit-site/edit-site.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SiteListComponent, AddSiteComponent, EditSiteComponent],
  imports: [
    CommonModule,
    SitesRoutingModule,
    SharedModule,
  ]
})
export class SitesModule {}
