import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsListComponent } from './reports-list/reports-list.component';
import { ReportAddComponent } from './report-add/report-add.component';
import { ReportEditComponent } from './report-edit/report-edit.component';


@NgModule({
  declarations: [
    ReportsListComponent,
    ReportAddComponent,
    ReportEditComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
