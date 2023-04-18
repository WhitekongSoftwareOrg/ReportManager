import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import {
  maxLengthValidationMessage,
  maxValidationMessage,
  minLengthValidationMessage,
  minValidationMessage,
} from './shared/formly/validator-msg/validator-msg';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppLayoutModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'Campo requerido' },
        { name: 'minLength', message: minLengthValidationMessage },
        { name: 'maxLength', message: maxLengthValidationMessage },
        { name: 'min', message: minValidationMessage },
        { name: 'max', message: maxValidationMessage },
      ],
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
