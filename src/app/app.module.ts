import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { FormlyModule } from '@ngx-formly/core';
import {
  maxLengthValidationMessage,
  maxValidationMessage,
  minLengthValidationMessage,
  minValidationMessage,
} from './shared/formly/validator-msg/validator-msg';
import { FormlyFieldFile } from './shared/components/file-type/file-type.component';
import { SharedModule } from './shared/shared.module';
import { ApiModule, BASE_PATH } from './shared/services/swagger';
import { environment } from 'src/environments/environment';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './shared/interceptors/loading.interceptor';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppLayoutModule,
    SharedModule,
    ApiModule,
    ProgressSpinnerModule,
    FormlyModule.forRoot({
      types: [{ name: 'file', component: FormlyFieldFile, wrappers: ['form-field'] }],
      validationMessages: [
        { name: 'required', message: 'Campo requerido' },
        { name: 'minLength', message: minLengthValidationMessage },
        { name: 'maxLength', message: maxLengthValidationMessage },
        { name: 'min', message: minValidationMessage },
        { name: 'max', message: maxValidationMessage },
      ],
    }),
  ],
  providers: [
    { provide: BASE_PATH , useValue: environment.url},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
