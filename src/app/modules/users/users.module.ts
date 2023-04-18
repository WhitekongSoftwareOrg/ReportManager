import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UsersRoutingModule } from './users.routing.module';

@NgModule({
  declarations: [UserListComponent, UserAddComponent, UserEditComponent],
  imports: [CommonModule, UsersRoutingModule],
})
export class UsersModule {}
