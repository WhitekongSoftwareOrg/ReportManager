import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypesListComponent } from './pages/types-list/types-list.component';
import { TypeAddComponent } from './pages/type-add/type-add.component';
import { TypeEditComponent } from './pages/type-edit/type-edit.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: TypesListComponent,
      },
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
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypesRoutingModule {}
