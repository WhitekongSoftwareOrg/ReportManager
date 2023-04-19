import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  ConfirmEventType,
  ConfirmationService,
  MessageService,
} from 'primeng/api';
import { UserMockService } from 'src/app/core/mock/users.mock';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  selectedUsers: any[] = [];
  numResultsDisplayed: number = 10;
  actualFirst = 0;
  constructor(
    private title: TitleService,
    private mock: UserMockService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.title.changeTitle('Usuarios');
    this.mock.getUsers().subscribe((data: any) => {
      this.users = data;
    });
  }


  open(id: string) {
    this.router.navigate(['/users/edit/', id]);
  }

  delete(user: any) {
    this.confirmationService.confirm({
      message: 'Eliminarás este usuario de forma permanente',
      header: `¿Quieres elimiar ${user.name}?`,
      icon: 'pi pi-info-circle',
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Éxito',
          detail: `${user.name} eliminado`,
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
    this.router.navigate(['/users/add']);
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
