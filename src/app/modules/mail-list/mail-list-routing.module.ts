import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailsListListComponent } from './emails-list-list/emails-list-list.component';
import { EmailsListAddComponent } from './emails-list-add/emails-list-add.component';
import { EmailsListEditComponent } from './emails-list-edit/emails-list-edit.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: EmailsListListComponent,
      },
      {
        path: 'add',
        component: EmailsListAddComponent,
      },
      {
        path: 'edit/:id',
        component: EmailsListEditComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailListRoutingModule { }
