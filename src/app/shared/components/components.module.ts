import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GenericTableComponent } from './generic-table/generic-table.component';
import { PRIMENGModule } from '../prime-ng/prime-ng.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [HeaderComponent, GenericTableComponent],
  imports: [CommonModule, ReactiveFormsModule,TranslateModule, PRIMENGModule],
  exports: [HeaderComponent, GenericTableComponent],
})
export class ComponentsModule {}
