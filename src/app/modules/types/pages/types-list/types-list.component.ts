import { Component, OnInit } from '@angular/core';
import { PeriodicitiesService } from 'src/app/shared/services/swagger';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-types-list',
  templateUrl: './types-list.component.html',
  styleUrls: ['./types-list.component.scss'],
})
export class TypesListComponent implements OnInit {
  loading = false;
  columns = [
    {
      label: 'types.label.periodicity',
      name: 'periodicityName',
      sortable: true,
    },
    {
      label: 'types.label.description',
      name: 'periodicityDescription',
      sortable: true,
    },
  ];

  count = 0;
  list: any = [];

  constructor(
    private title: TitleService,
    private periodicitiesService: PeriodicitiesService
  ) {}

  ngOnInit(): void {
    this.title.changeTitle('types.title');
  }

  removeRows(event: any) {
    this.loading = true;
    this.periodicitiesService
      .apiPeriodicitiesRemoveByIdsPut(event)
      .subscribe(() => {
        this.periodicitiesService
          .apiPeriodicitiesGet(0, 10, 'periodicityId', 'DESC')
          .subscribe((_res: any) => {
            this.count = _res.count;
            this.list = _res.list;
            this.loading = false;
          });
      });
  }

  getList(event: any) {
    this.loading = true;
    this.periodicitiesService
      .apiPeriodicitiesGet(
        event.skip,
        event.take,
        event.orderBy,
        event.orderDirection,
        event.filter.periodicityName,
        event.filter.periodicityDescription
      )
      .subscribe((res: any) => {
        this.loading = false;
        this.count = res.count;
        this.list = res.list;
      });
  }
}
