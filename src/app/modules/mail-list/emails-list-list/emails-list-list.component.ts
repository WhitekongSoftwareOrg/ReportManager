import { Component, OnInit } from '@angular/core';
import { MailListsService } from 'src/app/shared/services/swagger';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-emails-list-list',
  templateUrl: './emails-list-list.component.html',
  styleUrls: ['./emails-list-list.component.scss'],
})
export class EmailsListListComponent implements OnInit {
  loading = false;
  columns = [
    {
      label: 'nombre',
      name: 'mailListName',
      sortable: true,
    },
    {
      label: 'Direcciones',
      name: 'mailListAddresses',
      sortable: true,
    },
  ];

  count = 0;
  list: any = [];

  constructor(
    private title: TitleService,
    private mailListService: MailListsService
  ) {}

  removeRows(event: any) {
    this.loading = true;
    this.mailListService.apiMailListsRemoveByIdsPut(event).subscribe(() => {
      this.mailListService
        .apiMailListsGet(0, 10, 'mailListId', 'DESC')
        .subscribe((_res: any) => {
          this.count = _res.count;
          this.list = _res.list;
          this.loading = false;
        });
    });
  }

  getList(event: any) {
    this.loading = true;
    this.mailListService
      .apiMailListsGet(
        event.skip,
        event.take,
        event.orderBy,
        event.orderDirection,
        undefined,
        event.filter.mailListName,
        event.filter.mailListAddresses
      )
      .subscribe((res: any) => {
        this.loading = false;
        this.count = res.count;
        this.list = res.list;
      });
  }

  ngOnInit(): void {
    this.title.changeTitle('email.title');
  }
}
