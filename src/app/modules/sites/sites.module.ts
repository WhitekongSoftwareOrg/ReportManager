import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

import { SitesRoutingModule } from './sites-routing.module';
import { SiteListComponent } from './pages/site-list/site-list.component';
import { AddSiteComponent } from './pages/add-site/add-site.component';
import { EditSiteComponent } from './pages/edit-site/edit-site.component';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // import these modules
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';

export function minLengthValidationMessage(
  error: any,
  field: FormlyFieldConfig
) {
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
  declarations: [SiteListComponent, AddSiteComponent, EditSiteComponent],
  imports: [
    CommonModule,
    SitesRoutingModule,
    TableModule,
    ButtonModule,
    SharedModule,
    FormsModule,
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
export class SitesModule {}
