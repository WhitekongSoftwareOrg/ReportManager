import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CentralsService } from 'src/app/shared/services/swagger';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.scss'],
})
export class SiteListComponent implements OnInit {
  loading = false;
  columns = [
    {
      label: 'sites.label.name',
      name: 'centralCode',
      sortable: true,
    },
    {
      label: 'sites.label.description',
      name: 'centralDescription',
      sortable: true,
    },
    {
      label: 'sites.label.city',
      name: 'centralCity',
      sortable: true,
    },
    {
      label: 'sites.label.region',
      name: 'centralRegion',
      sortable: true,
    },
    {
      label: 'sites.label.country',
      name: 'centralCountry',
      sortable: true,
    },
    {
      label: 'sites.label.parentId',
      name: 'centralParentId',
      sortable: true,
    },
  ];

  count = 0;
  list: any = [];

  constructor(
    private title: TitleService,
    private centralsService: CentralsService,
    private translate: TranslateService
  ) {}

  removeRows(event: any) {
    this.loading = true;
    this.centralsService.apiCentralsRemoveByIdsPut(event).subscribe(() => {
      this.centralsService
        .apiCentralsGet(0, 10, 'centralId', 'DESC')
        .subscribe((_res: any) => {
          this.count = _res.count;
          this.list = _res.list;
          this.loading = false;
        });
    });
  }

  getList(event: any) {
    this.loading = true;
    this.centralsService
      .apiCentralsGet(
        event.skip,
        event.take,
        event.orderBy,
        event.orderDirection,
        event.filter.centralId,
        event.filter.centralCode,
        event.filter.centralDescription,
        event.filter.centralCity,
        event.filter.centralRegion,
        event.filter.centralCountry,
        event.filter.centralParentId
      )
      .subscribe((res: any) => {
        this.loading = false;
        this.count = res.count;
        this.list = res.list;
      });
  }

  ngOnInit(): void {
    this.title.changeTitle('sites.title');
    this.translate.onLangChange.subscribe(() => {
      this.title.changeTitle('sites.title');
    });
  }
}
