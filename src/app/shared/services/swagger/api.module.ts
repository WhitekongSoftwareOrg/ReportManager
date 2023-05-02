import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { AuthService } from './api/auth.service';
import { CentralsService } from './api/centrals.service';
import { ConfigurationsService } from './api/configurations.service';
import { MailListsService } from './api/mailLists.service';
import { PeriodicitiesService } from './api/periodicities.service';
import { ReportStatesService } from './api/reportStates.service';
import { ReportsService } from './api/reports.service';
import { SecuritiesService } from './api/securities.service';
import { UserService } from './api/user.service';
import { UserGroupService } from './api/userGroup.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    AuthService,
    CentralsService,
    ConfigurationsService,
    MailListsService,
    PeriodicitiesService,
    ReportStatesService,
    ReportsService,
    SecuritiesService,
    UserService,
    UserGroupService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
