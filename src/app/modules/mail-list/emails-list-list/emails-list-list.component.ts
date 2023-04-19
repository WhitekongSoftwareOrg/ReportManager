import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  ConfirmEventType,
  ConfirmationService,
  MessageService,
} from 'primeng/api';
import { EmailsListMockService as mock } from 'src/app/core/mock/email-list.mock';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-emails-list-list',
  templateUrl: './emails-list-list.component.html',
  styleUrls: ['./emails-list-list.component.scss']
})
export class EmailsListListComponent implements OnInit {
  emailsLists: any[] = [];
  selectedEmailsLists: any[] = [];
  numResultsDisplayed: number = 10;
  actualFirst = 0;

  constructor(
    private title: TitleService,
    private emailListsMock: mock,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}


  ngOnInit(): void {
    this.title.changeTitle('Listas de correos');
    this.emailListsMock.getEmailsList().subscribe((data) => (this.emailsLists = data));
  }

  open(id: string) {
    this.router.navigate(['/email-list/edit/', id]);
  }

  delete(emailList: any) {
    this.confirmationService.confirm({
      message: 'Eliminarás esta lista de correo de forma permanente',
      header: `¿Quieres elimiar ${emailList.name}?`,
      icon: 'pi pi-info-circle',
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Éxito',
          detail: `${emailList.name} eliminado`,
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
    this.router.navigate(['/email-list/add']);
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
