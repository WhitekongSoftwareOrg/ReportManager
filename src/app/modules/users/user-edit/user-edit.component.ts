import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { ActivatedRoute, Router } from '@angular/router';
import { userFields as fields, userFields } from '../config/user.form';
import {
  User,
  UserGroupService,
  UserService,
} from 'src/app/shared/services/swagger';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  id: string | number = '';
  data: User = {};
  form = new FormGroup({});
  model: User = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = fields;
  fieldsTemplate: FormlyFieldConfig[] = fields;

  constructor(
    private title: TitleService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private userGroupService: UserGroupService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.title.changeTitle('users.title-edit');
    this.route.params.subscribe((params: any) => {
      this.id = params.id;
    });

    if (this.id) {
      this.userService.apiUserIdGet(this.id as any).subscribe((res) => {
        this.data = res;
        this.userGroupService.apiUserGroupGet().subscribe((res) => {
          (
            fields.find((f: any) => f.key === 'userGroupId') as any
          ).templateOptions.options = (res as any).list.map((r: any) => ({
            value: r.userGroupId,
            label: r.userGroupName,
          }));

          if ((res as any).list && (res as any).list[0]) {
            this.model.userGroupId = (res as any).list[0].userGroupId;
          }

          this.model.userRol = 'User';
          this.form.patchValue(this.model);
          this.setData();
          this.fieldsTemplate = this.fields;
          this.rebuildFields();
        });
      });
    }

    this.translate.onLangChange.subscribe(() => {
      this.title.changeTitle('users.title-edit');
      this.rebuildFields();
    });
  }

  setData() {
    this.fields = Object.keys(this.data).map((siteProp: any) => ({
      ...userFields.find((field: any) => field.key === siteProp),
      defaultValue: (this.data as any)[siteProp],
    }));
  }

  submit() {
    if (this.form.valid) {
      this.userService
        .apiUserIdPut(this.id as any, {
          ...this.form.value,
          userId: this.id,
        })
        .subscribe(
          (res) => {
            this.router.navigate(['/users']);
          },
          (error) => alert('Ha ocurrido un error')
        );
    }
  }

  rebuildFields() {
    this.fields = this.fieldsTemplate.map((fild: any) => {
      if (!fild?.props?.label) {
        return;
      }

      const objectTranslated = {
        ...fild,
        props: {
          ...fild.props,
          label: this.translate.instant(fild.props.label),
        },
      };

      if (fild.key === 'userRol') {
        objectTranslated.props.options = fild.props.options.map(
          (option: any) => ({
            ...option,
            label: this.translate.instant(option.label),
          })
        );
      }

      return objectTranslated;
    });
  }
}
