import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  ConfirmEventType,
  ConfirmationService,
  MessageService,
} from 'primeng/api';
import { GroupsMockService as mock } from 'src/app/core/mock/groups.mock';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss'],
})
export class GroupListComponent implements OnInit {
  groups: any[] = [];
  selectedGroups: any[] = [];
  numResultsDisplayed: number = 10;
  actualFirst = 0;

  constructor(
    private title: TitleService,
    private groupsMock: mock,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.title.changeTitle('Grupos');
    this.groupsMock.getGroups().subscribe((data) => (this.groups = data));
  }

  open(id: string) {
    this.router.navigate(['/groups/edit/', id]);
  }

  delete(groups: any) {
    this.confirmationService.confirm({
      message: 'Eliminarás este grupo de forma permanente',
      header: `¿Quieres elimiar ${groups.name}?`,
      icon: 'pi pi-info-circle',
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Éxito',
          detail: `${groups.name} eliminado`,
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
    this.router.navigate(['/groups/add']);
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
