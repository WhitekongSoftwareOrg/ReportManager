import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SecurityFields as fields, SecurityFields } from '../config/secutiry.form';
import { TitleService } from 'src/app/shared/services/title.service';
import { CentralsService, SecuritiesService, Security, UserGroupService, UserService } from 'src/app/shared/services/swagger';

@Component({
  selector: 'app-security-edit',
  templateUrl: './security-edit.component.html',
  styleUrls: ['./security-edit.component.scss'],
})
export class SecurityEditComponent implements OnInit {
  id: string | number = '';
  list: any = {};
  data: Security = {};
  form = new FormGroup({});
  model: Security = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = fields;

  constructor(
    private title: TitleService,
    private router: Router,
    private securitiesService: SecuritiesService,
    private userGroupService: UserGroupService,
    private userService: UserService,
    private centralService: CentralsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.title.changeTitle('Editar entrada de seguridad');
    this.route.params.subscribe((params: any) => {
      this.id = params.id;
    });

    if (this.id) {
      this.securitiesService.apiSecuritiesIdGet(this.id as any).subscribe(res => {
        this.data = res
        this.userGroupService.apiUserGroupGet().subscribe(res => {
          (fields.find((f: any) => f.key === 'securityUserGroupId') as any).templateOptions.options =
          (res as any).list.map((r: any) => ({ value: r.userGroupId, label: r.userGroupName }))
          this.centralService.apiCentralsGet().subscribe(_res => {
            (fields.find((f: any) => f.key === 'centralId') as any).templateOptions.options =
            (_res as any).list.map((r: any) => ({ value: r.centralId, label: r.centralCode }))
            this.userService.apiUserGet().subscribe(__res => {
              (fields.find((f: any) => f.key === 'userId') as any).templateOptions.options =
                (__res as any).list.map((r: any) => ({ value: r.userId, label: r.userName }))
              })
              this.setData();
            })
          })
      })
    }
  }

  setData() {
    this.fields = Object.keys(this.data).map((siteProp: any) => (
      {
        ...SecurityFields.find((field: any) => field.key === siteProp),
        defaultValue: (this.data as any)[siteProp]
      }
    ))
  }

  submit() {
    if (this.form.valid) {
      this.securitiesService.apiSecuritiesIdPut(this.id as any, {
        ...this.model,
        securityId: this.id as any
      }).subscribe(res => {
        this.router.navigate(['/security']);
      }, error => {
        alert('Ha ocurrido un error durante la creación de sitios')
      })
    }
  }
}
