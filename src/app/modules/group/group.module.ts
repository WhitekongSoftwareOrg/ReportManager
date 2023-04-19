import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupAddComponent } from './group-add/group-add.component';
import { GroupEditComponent } from './group-edit/group-edit.component';
import { GroupRoutingModule } from './group-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [GroupListComponent, GroupAddComponent, GroupEditComponent],
  imports: [CommonModule, GroupRoutingModule, SharedModule],
})
export class GroupModule {}
