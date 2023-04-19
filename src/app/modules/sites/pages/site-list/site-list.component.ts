import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  ConfirmEventType,
  ConfirmationService,
  MessageService,
} from 'primeng/api';
import { SiteMockService } from 'src/app/core/mock/sites.mock';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.scss'],
})
export class SiteListComponent implements OnInit {
  sites: any[] = [];
  selectedSites: any[] = [];
  numResultsDisplayed: number = 10;
  actualFirst = 0;

  constructor(
    private title: TitleService,
    private siteMock: SiteMockService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.title.changeTitle('Sitios');
    this.siteMock.getSites().subscribe((data) => {
      this.sites = data;
    });
  }

  open(id: string) {
    this.router.navigate(['/sites/edit/', id]);
  }

  delete(site: any) {
    this.confirmationService.confirm({
      message: 'Eliminarás este sitio de forma permanente',
      header: `¿Quieres elimiar ${site.name}?`,
      icon: 'pi pi-info-circle',
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Éxito',
          detail: `${site.name} eliminado`,
        });
      },
      reject: (type: any) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Acción Rechazada',
            });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({
              severity: 'warn',
              summary: 'Cancelado',
              detail: 'Acción cancelada',
            });
            break;
        }
      },
      key: 'positionDialog',
    });
  }

  add() {
    this.router.navigate(['/sites/add']);
  }

  updateRowsInTable(event: any) {
    this.numResultsDisplayed = event.rows;
    this.actualFirst = event.first;
  }

  onSort(event: any) {
    console.log(event);
    //API THINGS
  }
}
