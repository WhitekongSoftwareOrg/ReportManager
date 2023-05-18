import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  ConfirmEventType,
  ConfirmationService,
  MessageService,
} from 'primeng/api';

export interface Column {
  name: string;
  sortable: boolean;
  label: string;
  filterName?: string;
  options?: any[];
}

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss'],
})
export class GenericTableComponent implements OnChanges {
  @Input() addPage?: string;
  @Input() editPage?: string;
  @Input() removeMessage?: string;
  @Input() removeMessageMultiple?: string;
  @Output() onGetList = new EventEmitter<any>();
  @Output() onRemoveRow = new EventEmitter<any>();
  @Input() idColumn?: string;
  @Input() nameColumn?: string;
  @Input() columns: Column[] = [];
  @Input() loading: boolean = false;
  @Input() count = 0;
  @Input() list!: any;
  @Input() noContentToShow!: string;
  @Input() dateFilters: string[] = [];

  selectedSites: any[] = [];
  selectedRows: any[] = [];
  numResultsDisplayed: number = 10;
  actualFirst = 0;

  filter: any = {};
  skip = 0;
  take = 10;
  orderBy = undefined;
  orderDirection = 'DESC';

  constructor(
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }

  clear(property: string) {
    delete this.filter[property];
    this.onGetList.emit({
      filter: this.filter,
      count: this.count,
      skip: this.skip,
      take: this.take,
      orderBy: this.orderBy,
      orderDirection: this.orderDirection,
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ((this.columns as any)?.currentValue) {
      (this.columns as any).forEach((column: any) => {
        this.filter[column.name] = '';
      });
    }

    const newList = (changes as any).list?.currentValue;
    if (newList) {
      newList.forEach((item: any) => {
        Object.keys(item).forEach((key) => {
          if (this.dateFilters.includes(key)) {
            const currentDate = new Date(item[key]);
            const year = currentDate.getFullYear();
            const month = (currentDate.getMonth() + 1)
              .toString()
              .padStart(2, '0');
            const day = currentDate.getDate().toString().padStart(2, '0');
            item[key] = `${month}-${day}-${year}`;
          }
        });
      });
    }
  }

  getCurrentPageTemplate() {
    if (!this.list) {
      return '';
    }

    return `${this.list.length} de ${this.count}`;
  }

  add() {
    this.router.navigate([this.addPage]);
  }

  open(row: any) {
    this.router.navigate([this.editPage, row[this.idColumn || '']]);
  }

  removeAll() {
    this.onRemoveRow.emit(
      this.selectedRows.map((row: any) => row[this.idColumn || ''])
    );
  }

  onFilter(columnName: string, event: any) {
    const column: any = this.columns.find((c) => c.name == columnName);
    const filter = { ...this.filter };
    filter[columnName] = event;

    if (column && column.filterName) {
      filter[column.filterName] = event;
      delete filter[columnName];
    }

    Object.keys(filter).forEach((k) => {
      if (filter[k] === '') {
        delete filter[k];
      }
    });

    this.onGetList.emit({
      filter,
      count: this.count,
      skip: this.skip,
      take: this.take,
      orderBy: this.orderBy,
      orderDirection: this.orderDirection,
    });
  }

  onSort(event: any) {
    const parseOrder = event.order === 1 ? 'ASC' : 'DESC'
    if (event.field !== this.orderBy ||  parseOrder !== this.orderDirection) {
      this.orderBy = event.field;
      this.orderDirection = parseOrder;
      this.onGetList.emit({
        filter: this.filter,
        count: this.count,
        skip: this.skip,
        take: this.take,
        orderBy: this.orderBy,
        orderDirection: this.orderDirection,
      });
    }
  }

onPageChange(event: any) {
  this.skip = event.page * event.rows;
  this.take = event.rows;
  this.onGetList.emit({
    filter: this.filter,
    count: this.count,
    skip: this.skip,
    take: this.take,
    orderBy: this.orderBy,
    orderDirection: this.orderDirection,
  });
}

updateRowsInTable(event: any) {
  // this.numResultsDisplayed = event.rows;
  // this.actualFirst = event.first;
}

delete (row ?: any) {
  let selected = 0;
  this.confirmationService.confirm({
    message:
      this.selectedRows && this.selectedRows.length > 1
        ? this.removeMessageMultiple?.replace(
          '{num}',
          this.selectedRows.length.toString()
        )
        : this.removeMessage || '',
    header: `¿Quieres elimiar ${this.selectedRows
      ?.map((row: any) => row[this.nameColumn!])
      .join(',')}?`,
    icon: 'pi pi-info-circle',
    accept: () => {
      if (row && this) {
        this.selectedRows = [row];
        selected = 1;
        this.removeAll();
        this.selectedRows = [];
      } else {
        selected = this.selectedRows?.length;
        this.removeAll();
        this.selectedRows = [];
      }
      this.messageService.add({
        severity: 'info',
        summary: 'Éxito',
        detail: `${selected} eliminado${selected && selected > 1 ? 's' : ''}`,
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
}
