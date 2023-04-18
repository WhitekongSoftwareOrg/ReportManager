import { FormlyFieldConfig } from '@ngx-formly/core';

export function minLengthValidationMessage(
  error: any,
  field: FormlyFieldConfig
) {
  return `Este valor tiene que ser mayor de ${
    field.props!.minLength
  } carácteres`;
}

export function maxLengthValidationMessage(
  error: any,
  field: FormlyFieldConfig
) {
  return `Este valor tiene que ser menor de ${
    field.props!.maxLength
  } carácteres`;
}

export function minValidationMessage(error: any, field: FormlyFieldConfig) {
  return `Este valor tiene que ser mayor que ${field.props!.min}`;
}

export function maxValidationMessage(error: any, field: FormlyFieldConfig) {
  return `Este valor tiene que ser menor que ${field.props!.max}`;
}
