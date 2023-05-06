export interface Column {
  name: string,
  sortable: boolean,
  label: string
}

export class TableHelper {
  columns: Column[] = [];
  list: any = [];
  selectedSites: any[] = [];
  numResultsDisplayed: number = 10;
  actualFirst = 0;

  count = 0;
  skip = 0;
  take = 10;
  orderBy = undefined;
  orderDirection = 'ASC';

  filter: any = {};

  getList!: Function;

  constructor(
    columns: Column[],
    getMethod: any,
  ) {
    this.columns = columns;
    columns.forEach(column => {
      this.filter[column.name] = "";
    });
    this.getList = getMethod;
  }

  refresh() {
    this.getList().subscribe((data: any) => {
      this.list = data.list || [];
      this.count = data.count || 0;
    })
  }

  getCurrentPageTemplate() {
    return `${this.list.length} de ${this.count}`;
  }

  onSort(event: any) {
    if (event.field !== this.orderBy && event.order !== this.orderDirection) {
      this.orderBy = event.field;
      this.orderDirection = event.order === 1 ? 'ASC' : 'DESC';
      this.refresh();
    }
  }

  onPageChange(event: any) {
    this.skip = event.page * event.rows;
    this.take = event.rows;
    this.refresh();
  }

  updateRowsInTable(event: any) {
    this.numResultsDisplayed = event.rows;
    this.actualFirst = event.first;
  }
}
