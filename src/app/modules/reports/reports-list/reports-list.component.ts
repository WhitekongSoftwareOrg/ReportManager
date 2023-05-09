import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/shared/services/swagger';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.scss'],
})
export class ReportsListComponent implements OnInit {
  loading = false;
  columns = [
    {
      label: 'Id',
      name: 'reportId',
      sortable: true
    },
    {
      label: 'Nombre',
      name: 'reportName',
      sortable: true
    },
    {
      label: 'Descripción',
      name: 'reportDescription',
      sortable: true
    },
    {
      label: 'Primera ejecución',
      name: 'reportFirstDate',
      sortable: true
    },
    {
      label: 'Siguiente ejecución',
      name: 'reportNextDate',
      sortable: true
    }
  ];

  count = 0;
  list: any = [];

  constructor(
    private title: TitleService,
    private reportsService: ReportsService,
  ) {
  }

  removeRows(event: any) {
    this.loading = true;
    this.reportsService.apiReportsRemoveByIdsPut(event).subscribe(() => {
      this.reportsService.apiReportsGet(0, 10, 'reportId', 'DESC').subscribe((_res: any) => {
        this.count = _res.count;
        this.list = _res.list;
        this.loading = false;
      })
    })
  }

  getList(event: any) {
    this.loading = true;
    this.reportsService.apiReportsGet(
      event.skip,
      event.take,
      event.orderBy,
      event.orderDirection,
      event.filter.reportName,
      event.filter.reportDescription,
      event.filter.reportFirstDate,
      event.filter.reportNextDate,
      event.filter.reportDateCell,
      event.filter.reportExcelFileName,
      event.filter.centralId,
      event.filter.reportAdminNote,
      event.filter.reportValidationRequired,
      event.filter.reportOpRange,
      event.filter.reportExecHour,
      event.filter.mailListId,
      event.filter.reportNextUtcDate,
      event.filter.userId,
      event.filter.reportFileNameFormat,
      event.filter.reportAttachedFileNameFormat,
      event.filter.reportUserGroupId,
      event.filter.revisionMailListId,
      event.filter.reportPostExecutionExcelMacro,
      event.filter.reportPreExecutionExcelMacro,
      event.filter.reportDeleted,
    ).subscribe((res: any) => {
      this.loading = false;
      this.count = res.count;
      this.list = res.list;
    })
  }

  ngOnInit(): void {
    this.title.changeTitle('Sitios');
  }
}
