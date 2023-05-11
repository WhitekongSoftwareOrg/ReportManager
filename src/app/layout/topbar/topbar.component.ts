import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  user = {
    name: localStorage.getItem('ctk-username'),
    alias:
      localStorage.getItem('ctk-username')!.charAt(0) +
      localStorage.getItem('ctk-userlastname')!.charAt(0),
  };

  items!: MenuItem[];
  language = 'es';

  constructor(
    private router: Router,
    private translateService: TranslateService,
  ) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Cerrar sesión',
        icon: 'pi pi-sign-out',
        command: () => {
          localStorage.clear();
          this.router.navigate(['/login']);
        },
      },
    ];
  }

  toggleLanguage() {
    this.language = this.language === 'es' ? 'en' : 'es';
    this.translateService.use(this.language);
  }
}
