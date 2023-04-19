import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailListRoutingModule } from './mail-list-routing.module';
import { EmailsListListComponent } from './emails-list-list/emails-list-list.component';
import { EmailsListAddComponent } from './emails-list-add/emails-list-add.component';
import { EmailsListEditComponent } from './emails-list-edit/emails-list-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EmailsListListComponent,
    EmailsListAddComponent,
    EmailsListEditComponent
  ],
  imports: [
    CommonModule,
    MailListRoutingModule,
    SharedModule
  ]
})
export class MailListModule { }
