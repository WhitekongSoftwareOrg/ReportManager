import { Component, OnInit } from '@angular/core';
import { SecuritiesService } from 'src/app/shared/services/swagger';
import { TitleService } from 'src/app/shared/services/title.service';
@Component({
  selector: 'app-security-list',
  templateUrl: './security-list.component.html',
  styleUrls: ['./security-list.component.scss'],
})
export class SecurityListComponent implements OnInit {
  loading = false;
  columns = [
    {
      label: 'security.label.name-user',
      name: 'windowsIdentityUserName',
      sortable: true,
    },
    {
      label: 'security.label.name-group',
      name: 'windowsIdentityGroupName',
      sortable: true,
    },
    {
      label: 'security.label.rol.label',
      name: 'roleId',
      sortable: true,
      options: [
        {
          value: 1,
          label: 'Usuario',
        },
        {
          value: 2,
          label: 'Validador',
        },
        {
          value: 3,
          label: 'Administrador',
        },
      ],
    },
    {
      label: 'security.label.group',
      name: 'securityUserGroupId',
      filterName: 'securityUserGroupName',
      sortable: true,
    },
    {
      label: 'security.label.site',
      name: 'centralId',
      filterName: 'centralName',
      sortable: true,
    },
  ];

  mapRol: any = {
    1: 'Usuario',
    2: 'Validador',
    3: 'Administrador',
  };

  count = 0;
  list: any = [];

  constructor(
    private title: TitleService,
    private securitiesService: SecuritiesService
  ) {}

  removeRows(event: any) {
    this.loading = true;
    this.securitiesService.apiSecuritiesRemoveByIdsPut(event).subscribe(() => {
      this.securitiesService
        .apiSecuritiesGet(0, 10, 'securityId', 'DESC')
        .subscribe((_res: any) => {
          this.count = _res.count;
          this.list = _res.list;
          this.loading = false;
        });
    });
  }

  getList(event: any) {
    console.log(event.filter);
    this.loading = true;
    this.securitiesService
      .apiSecuritiesGet(
        event.skip,
        event.take,
        event.orderBy,
        event.orderDirection,
        undefined,
        undefined,
        event.filter.windowsIdentityUserName,
        event.filter.windowsIdentityGroupName,
        event.filter.roleId,
        undefined,
        event.filter.centralName,
        event.filter.securityUserGroupName,
        event.filter.securityUserGroupId
      )
      .subscribe((res: any) => {
        this.loading = false;
        this.count = res.count;
        this.list = res.list.map((item: any) => {
          const userGroup = item.securityUserGroupId
            ? item.securityUserGroupId + '-'
            : '';
          const centralId = item.centralId ? item.centralId + '-' : '';
          const populatedGroup = res.populatedUserGroups.find(
            (ug: any) => ug.userGroupId == item.securityUserGroupId
          );
          const populatedCentral = res.populatedCentrals.find(
            (ug: any) => ug.centralId == item.centralId
          );

          return {
            ...item,
            securityUserGroupId:
              userGroup +
              (populatedGroup ? populatedGroup.userGroupName : 'All groups'),
            centralId:
              centralId +
              (populatedCentral
                ? populatedCentral.centralCode
                : 'All centrals'),
            roleId: this.mapRol[item.roleId],
          };
        });
      });
  }

  ngOnInit(): void {
    this.title.changeTitle('security.title');
  }
}
