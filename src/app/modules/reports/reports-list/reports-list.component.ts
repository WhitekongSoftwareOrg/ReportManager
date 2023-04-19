import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  ConfirmEventType,
  ConfirmationService,
  MessageService,
} from 'primeng/api';
import { ReporttMockService as mock } from 'src/app/core/mock/report.mock';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.scss'],
})
export class ReportsListComponent implements OnInit {
  reportLists: any[] = [];
  selectedReports: any[] = [];
  numResultsDisplayed: number = 10;
  actualFirst = 0;

  constructor(
    private title: TitleService,
    private reportMock: mock,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.title.changeTitle('Informes');
    this.reportMock
      .getReportList()
      .subscribe((data) => (this.reportLists = data));
  }


  open(id: string) {
    this.router.navigate(['/reports/edit/', id]);
  }

  delete(report: any) {
    this.confirmationService.confirm({
      message: 'Eliminarás este informe de forma permanente',
      header: `¿Quieres elimiar ${report.name}?`,
      icon: 'pi pi-info-circle',
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Éxito',
          detail: `${report.name} eliminado`,
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
    this.router.navigate(['/reports/add']);
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
