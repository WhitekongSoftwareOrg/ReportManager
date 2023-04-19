import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  ConfirmEventType,
  ConfirmationService,
  MessageService,
} from 'primeng/api';
import { SecurityListMockService as mock } from 'src/app/core/mock/security.mocks';
import { TitleService } from 'src/app/shared/services/title.service';
@Component({
  selector: 'app-security-list',
  templateUrl: './security-list.component.html',
  styleUrls: ['./security-list.component.scss'],
})
export class SecurityListComponent implements OnInit {
  securityLists: any[] = [];
  selectedSecurityLists: any[] = [];
  numResultsDisplayed: number = 10;
  actualFirst = 0;

  constructor(
    private title: TitleService,
    private securityListsMock: mock,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.title.changeTitle('Entradas de seguridad');
    this.securityListsMock.getSecurityList().subscribe((data) => (this.securityLists = data));
  }

  open(id: string) {
    this.router.navigate(['/security/edit/', id]);
  }

  delete(securityList: any) {
    this.confirmationService.confirm({
      message: 'Eliminarás esta lista de correo de forma permanente',
      header: `¿Quieres elimiar ${securityList.name}?`,
      icon: 'pi pi-info-circle',
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Éxito',
          detail: `${securityList.name} eliminado`,
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
    this.router.navigate(['/security/add']);
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
