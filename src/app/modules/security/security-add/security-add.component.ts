import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { SecurityFields as fields } from '../config/secutiry.form';
import { Router } from '@angular/router';
import { CentralsService, SecuritiesService, Security, UserGroupService, UserService } from 'src/app/shared/services/swagger';

@Component({
  selector: 'app-security-add',
  templateUrl: './security-add.component.html',
  styleUrls: ['./security-add.component.scss'],
})
export class SecurityAddComponent implements OnInit {
  form = new FormGroup({});
  model: Security = {};
  options: FormlyFormOptions = {};

  constructor(
    private title: TitleService,
    private router: Router,
    private securitiesService: SecuritiesService,
    private userGroupService: UserGroupService,
    private userService: UserService,
    private centralService: CentralsService,
  ) { }

  ngOnInit(): void {
    this.title.changeTitle('security.title-add');
    this.userGroupService.apiUserGroupGet().subscribe(res => {
      (fields.find((f: any) => f.key === 'securityUserGroupId') as any).templateOptions.options =
        (res as any).list.map((r: any) => ({ value: r.userGroupId, label: r.userGroupName }))

      if ((res as any).list && (res as any).list[0]) {
        this.model.securityUserGroupId = (res as any).list[0].userGroupId
      }

      this.model.roleId = 1;

      this.centralService.apiCentralsGet().subscribe(_res => {
        (fields.find((f: any) => f.key === 'centralId') as any).templateOptions.options =
        (_res as any).list.map((r: any) => ({ value: r.centralId, label: r.centralCode }))

        if ((_res as any).list && (_res as any).list[0]) {
          this.model.centralId = (_res as any).list[0].centralId
        }

        this.userService.apiUserGet().subscribe(__res => {
          (fields.find((f: any) => f.key === 'userId') as any).templateOptions.options =
          (__res as any).list.map((r: any) => ({ value: r.userId, label: r.userName }))

          if ((__res as any).list && (__res as any).list[0]) {
            this.model.userId = (__res as any).list[0].userId
          }
          this.form.patchValue(this.model);
        })
      })
    })
  }

  fields: FormlyFieldConfig[] = fields;

  submit() {
    if (this.form.valid) {
      this.securitiesService.apiSecuritiesPost({
        ...this.model
      }).subscribe(res => {
        this.router.navigate(['/security']);
      }, error => {
        alert('Ha ocurrido un error durante la creación de sitios')
      })
    }
  }
}
