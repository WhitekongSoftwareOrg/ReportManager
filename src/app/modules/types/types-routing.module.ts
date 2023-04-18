import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypesListComponent } from './pages/types-list/types-list.component';
import { TypeAddComponent } from './pages/type-add/type-add.component';
import { TypeEditComponent } from './pages/type-edit/type-edit.component';

const routes: Routes = [
  {
    path: '',
    component: TypesListComponent,
    children: [
      {
        path: 'add',
        component: TypeAddComponent,
      },
      {
        path: 'edit/:id',
        component: TypeEditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypesRoutingModule {}
