import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyDatepickerModule } from '@ngx-formly/primeng/datepicker';
import { FormlyInputModule } from '@ngx-formly/primeng/input';
import { ComponentsModule } from './components/components.module';
import { PRIMENGModule } from './prime-ng/prime-ng.module';
import { FileValueAccessor } from './directives/file-value-accessor.directive';
import { FormlyFieldFile } from './components/file-type/file-type.component';
import { FormlyChips } from './components/chips/chips.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyPrimeNGModule,
    FormlyModule,
    FormlyInputModule,
    ComponentsModule,
    PRIMENGModule,
    FormlyDatepickerModule,
  ],
  exports: [
    ReactiveFormsModule,
    FormlyPrimeNGModule,
    FormlyDatepickerModule,
    FormlyInputModule,
    FormlyModule,
    FormlyDatepickerModule,
    ComponentsModule,
    PRIMENGModule,
    FileValueAccessor,
    FormlyChips,
    TranslateModule,
  ],
  declarations: [FileValueAccessor, FormlyFieldFile, FormlyChips],
})
export class SharedModule {}
