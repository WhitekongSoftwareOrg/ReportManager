import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  ConfirmEventType,
  ConfirmationService,
  MessageService,
} from 'primeng/api';
import { TableHelper } from 'src/app/shared/helpers/table.helper';
import { CentralsService } from 'src/app/shared/services/swagger';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.scss'],
})
export class SiteListComponent implements OnInit {
  tableHelper!: TableHelper;

  constructor(
    private title: TitleService,
    private centralsService: CentralsService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private ngZone: NgZone
  ) {
    this.tableHelper = new TableHelper(
      [
        {
          label: 'Sitio',
          name: 'centralCode',
          sortable: true
        },
        {
          label: 'Descripción',
          name: 'centralDescription',
          sortable: true
        },
        {
          label: 'Ciudad',
          name: 'centralCity',
          sortable: true
        },
        {
          label: 'Región',
          name: 'centralRegion',
          sortable: true
        },
        {
          label: 'País',
          name: 'centralCountry',
          sortable: true
        },
        {
          label: 'PadreId',
          name: 'centralParentId',
          sortable: true
        }
      ],
      () => this.ngZone.run(() => this.centralsService.apiCentralsGet())
    )
  }

  ngOnInit(): void {
    this.title.changeTitle('Sitios');
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
}
