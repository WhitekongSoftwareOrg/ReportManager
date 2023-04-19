import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { SecurityListComponent } from './security-list/security-list.component';
import { SecurityAddComponent } from './security-add/security-add.component';
import { SecurityEditComponent } from './security-edit/security-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SecurityListComponent,
    SecurityAddComponent,
    SecurityEditComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    SharedModule
  ]
})
export class SecurityModule { }
