import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypesRoutingModule } from './types-routing.module';
import { TypesListComponent } from './pages/types-list/types-list.component';
import { TypeAddComponent } from './pages/type-add/type-add.component';
import { TypeEditComponent } from './pages/type-edit/type-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [TypesListComponent, TypeAddComponent, TypeEditComponent],
  imports: [CommonModule, TypesRoutingModule, SharedModule],
})
export class TypesModule {}
