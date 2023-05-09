import { Component, OnInit } from '@angular/core';
import { LoadingService } from './shared/services/loading.service';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  loading = false;
  title = 'reportManager';

  constructor(
    private loadingService: LoadingService,
    private config: PrimeNGConfig,
    private translateService: TranslateService
  ) {
  }

  ngOnInit(): void {
    this.loadingService.loading$.subscribe(res => this.loading = res);
    this.translateService.setDefaultLang('es');
    this.translate('es')
  }

  translate(lang: string) {
    this.translateService.use(lang);
    this.translateService.get('primeng').subscribe(res => {
      this.config.setTranslation(res)
    });
  }


}
