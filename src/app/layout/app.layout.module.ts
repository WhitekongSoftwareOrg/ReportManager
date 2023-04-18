import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from 'primeng/sidebar';
import { AppLayoutComponent } from './app.layout.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ScrollTopModule } from 'primeng/scrolltop';
import { AvatarModule } from 'primeng/avatar';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ComponentsModule } from '../shared/components/components.module';

@NgModule({
  declarations: [AppLayoutComponent, SidebarComponent, TopbarComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SidebarModule,
    RouterModule,
    ScrollTopModule,
    AvatarModule,
    ButtonModule,
    PanelMenuModule,
    ComponentsModule,
  ],
  exports: [AppLayoutComponent, SidebarComponent, TopbarComponent],
})
export class AppLayoutModule {}
