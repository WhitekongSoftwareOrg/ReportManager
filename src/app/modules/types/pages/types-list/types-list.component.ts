import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  ConfirmEventType,
  ConfirmationService,
  MessageService,
} from 'primeng/api';
import { TypeMockService } from 'src/app/core/mock/type.mock';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-types-list',
  templateUrl: './types-list.component.html',
  styleUrls: ['./types-list.component.scss'],
})
export class TypesListComponent implements OnInit {
  types: any[] = [];
  selectedTypes: any[] = [];
  numResultsDisplayed: number = 10;
  actualFirst = 0;

  constructor(
    private title: TitleService,
    private mock: TypeMockService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.title.changeTitle('Tipos');
    this.mock.getTypes().subscribe((data: any) => {
      this.types = data;
    });
  }

  open(id: string) {
    this.router.navigate(['/types/edit/', id]);
  }

  delete(type: any) {
    this.confirmationService.confirm({
      message: 'Eliminarás este tipo de forma permanente',
      header: `¿Quieres elimiar ${type.name}?`,
      icon: 'pi pi-info-circle',
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Éxito',
          detail: `${type.name} eliminado`,
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
    this.router.navigate(['/types/add']);
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
