import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserGroupService } from 'src/app/shared/services/swagger';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss'],
})
export class GroupListComponent implements OnInit {
  loading = false;
  columns = [
    {
      label: 'group.label.name',
      name: 'userGroupName',
      sortable: true,
    },
    {
      label: 'group.label.description',
      name: 'userGroupDescription',
      sortable: true,
    },
  ];

  count = 0;
  list: any = [];

  constructor(
    private title: TitleService,
    private userGroupService: UserGroupService
  ) {}

  removeRows(event: any) {
    this.loading = true;
    this.userGroupService.apiUserGroupRemoveByIdsPut(event).subscribe(() => {
      this.userGroupService
        .apiUserGroupGet(0, 10, 'userGroupId', 'DESC')
        .subscribe((_res: any) => {
          this.count = _res.count;
          this.list = _res.list;
          this.loading = false;
        });
    });
  }

  getList(event: any) {
    this.loading = true;
    
    this.userGroupService
      .apiUserGroupGet(
        event.skip,
        event.take,
        event.orderBy,
        event.orderDirection,
        event.filter.userGroupName,
        event.filter.userGroupDescription
      )
      .subscribe((res: any) => {
        this.loading = false;
        this.count = res.count;
        this.list = res.list;
      });
  }

  ngOnInit(): void {
    this.title.changeTitle('group.title');
  }
}
