import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';

export function minLengthValidationMessage(field: FormlyFieldConfig) {
  return `Should have atleast ${field.props!.minLength} characters`;
}

export function maxLengthValidationMessage(
  error: any,
  field: FormlyFieldConfig
) {
  return `This value should be less than ${field.props!.maxLength} characters`;
}

export function minValidationMessage(error: any, field: FormlyFieldConfig) {
  return `This value should be more than ${field.props!.min}`;
}

export function maxValidationMessage(error: any, field: FormlyFieldConfig) {
  return `This value should be less than ${field.props!.max}`;
}

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyPrimeNGModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
        { name: 'minLength', message: minLengthValidationMessage },
        { name: 'maxLength', message: maxLengthValidationMessage },
        { name: 'min', message: minValidationMessage },
        { name: 'max', message: maxValidationMessage },
      ],
    }),
  ],
})
export class SharedModule {}
