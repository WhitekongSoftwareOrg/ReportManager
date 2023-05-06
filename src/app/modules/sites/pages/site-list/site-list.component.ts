import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  ConfirmEventType,
  ConfirmationService,
  MessageService,
} from 'primeng/api';
import { Central, CentralsService } from 'src/app/shared/services/swagger';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.scss'],
})
export class SiteListComponent implements OnInit {
  sites: Central[] = [];
  selectedSites: any[] = [];
  numResultsDisplayed: number = 10;
  actualFirst = 0;

  count = 0;
  skip = 0;
  take = 10;
  orderBy = undefined;
  orderDirection = 'ASC';
  centralId = undefined;
  centralRegion = undefined;
  centralCountry = undefined;
  centralParentId = undefined;
  centralCode = undefined;
  centralCity = undefined;

  filter = {
    centralCode: ""
  };

  constructor(
    private title: TitleService,
    private centralsService: CentralsService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.title.changeTitle('Sitios');
  }

  getSites() {
    this.centralsService.apiCentralsGet(
      this.skip,
      this.take,
      this.orderBy,
      this.orderDirection,
      this.centralId,
      this.centralCode,
      this.centralCity,
      this.centralRegion,
      this.centralCountry,
      this.centralParentId
    ).subscribe((data) => {
      this.sites = data.list || [];
      this.count = data.count || 0;
    });
  }

  getCurrentPageTemplate() {
    return `${this.sites.length} de ${this.count}`;
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
    if (event.field !== this.orderBy && event.order !== this.orderDirection) {
      this.orderBy = event.field;
      this.orderDirection = event.order === 1 ? 'ASC' : 'DESC';
      this.getSites();
    }
  }

  onPageChange(event: any) {
    this.skip = event.page * event.rows;
    this.take = event.rows;
    this.getSites();
  }
}
