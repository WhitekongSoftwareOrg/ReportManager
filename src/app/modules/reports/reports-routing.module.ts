import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsListComponent } from './reports-list/reports-list.component';
import { ReportAddComponent } from './report-add/report-add.component';
import { ReportEditComponent } from './report-edit/report-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ReportsListComponent,
    children: [
      {
        path: 'add',
        component: ReportAddComponent,
      },
      {
        path: 'edit/:id',
        component: ReportEditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsRoutingModule {}
