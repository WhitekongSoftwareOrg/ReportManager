import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/swagger';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  loading = false;
  columns = [
    {
      label: 'users.label.login',
      name: 'userLogin',
      sortable: true,
    },
    {
      label: 'users.label.name',
      name: 'userName',
      sortable: true,
    },
    {
      label: 'users.label.lastname',
      name: 'userLastName',
      sortable: true,
    },
  ];

  count = 0;
  list: any = [];

  constructor(private title: TitleService, private usersService: UserService) {}

  removeRows(event: any) {
    this.loading = true;
    this.usersService.apiUserRemoveByIdsPut(event).subscribe(() => {
      this.usersService
        .apiUserGet(0, 10, 'centralId', 'DESC')
        .subscribe((_res: any) => {
          this.count = _res.count;
          this.list = _res.list;
          this.loading = false;
        });
    });
  }

  getList(event: any) {
    this.loading = true;
    this.usersService
      .apiUserGet(
        event.skip,
        event.take,
        event.orderBy,
        event.orderDirection,
        event.filter.userName,
        undefined,
        event.filter.userLastName,
        event.filter.userLogin
      )
      .subscribe((res: any) => {
        this.loading = false;
        this.count = res.count;
        this.list = res.list;
      });
  }

  ngOnInit(): void {
    this.title.changeTitle('users.title');
  }
}
