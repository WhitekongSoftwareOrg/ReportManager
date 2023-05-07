import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { CentralsService } from 'src/app/shared/services/swagger';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.scss'],
})
export class SiteListComponent implements OnInit {
  columns = [
    {
      label: 'Sitio',
      name: 'centralCode',
      sortable: true
    },
    {
      label: 'Descripción',
      name: 'centralDescription',
      sortable: true
    },
    {
      label: 'Ciudad',
      name: 'centralCity',
      sortable: true
    },
    {
      label: 'Región',
      name: 'centralRegion',
      sortable: true
    },
    {
      label: 'País',
      name: 'centralCountry',
      sortable: true
    },
    {
      label: 'PadreId',
      name: 'centralParentId',
      sortable: true
    }
  ];

  count = 0;
  list: any = [];

  constructor(
    private title: TitleService,
    private centralsService: CentralsService,
  ) {
  }

  removeRows(event: any) {
    this.centralsService.apiCentralsRemoveByIdsPut(event).subscribe(() => {
      this.centralsService.apiCentralsGet(0, 10, 'centralId', 'DESC').subscribe((_res: any) => {
        this.count = _res.count;
        this.list = _res.list;
      })
    })
  }

  getList(event: any) {
    this.centralsService.apiCentralsGet(
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
    ).subscribe((res: any) => {
      this.count = res.count;
      this.list = res.list;
    })
  }

  ngOnInit(): void {
    this.title.changeTitle('Sitios');
  }
}
