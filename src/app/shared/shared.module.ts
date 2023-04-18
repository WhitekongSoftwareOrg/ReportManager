import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { FormlyModule } from '@ngx-formly/core';

import { ComponentsModule } from './components/components.module';
import { PRIMENGModule } from './prime-ng/prime-ng.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyPrimeNGModule,
    FormlyModule,
    ComponentsModule,
    PRIMENGModule,
  ],
  exports: [
    ReactiveFormsModule,
    FormlyPrimeNGModule,
    FormlyModule,
    ComponentsModule,
    PRIMENGModule,
  ],
})
export class SharedModule {}
