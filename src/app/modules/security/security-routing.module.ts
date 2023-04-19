import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityListComponent } from './security-list/security-list.component';
import { SecurityAddComponent } from './security-add/security-add.component';
import { SecurityEditComponent } from './security-edit/security-edit.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: SecurityListComponent,
      },
      {
        path: 'add',
        component: SecurityAddComponent,
      },
      {
        path: 'edit/:id',
        component: SecurityEditComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
