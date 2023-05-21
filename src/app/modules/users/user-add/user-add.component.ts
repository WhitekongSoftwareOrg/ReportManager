import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { userFields as fields } from '../config/user.form';
import {
  User,
  UserGroupService,
  UserService,
} from 'src/app/shared/services/swagger';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss'],
})
export class UserAddComponent implements OnInit {
  form = new FormGroup({});
  model: User = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = fields;
  fieldsTemplate: FormlyFieldConfig[] = fields;

  constructor(
    private title: TitleService,
    private router: Router,
    private userService: UserService,
    private userGroupService: UserGroupService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.title.changeTitle('users.title-add');
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
    });

    this.rebuildFields();
    this.translate.onLangChange.subscribe(() => {
      this.rebuildFields();
      this.title.changeTitle('sites.title-add');
    });
  }

  submit() {
    if (this.form.valid) {
      this.userService
        .apiUserGet(
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          this.model.userLogin
        )
        .subscribe((res) => {
          if (
            res.list?.length &&
            res.list.find((u) => u.userLogin === this.model.userLogin)
          ) {
            alert('Ya existe un usuario con ese login');
            return;
          }
          this.userService
            .apiUserPost({
              ...this.model,
            })
            .subscribe(
              (res) => {
                this.router.navigate(['/users']);
              },
              (error) => {
                alert('Ha ocurrido un error durante la creación de usuarios');
              }
            );
        });
    }
  }

  rebuildFields() {
    this.fields = this.fieldsTemplate.map((fild: any) => {
      if (fild.type === 'select') {
        const objectToReturn = {
          ...fild,
          templateOptions: {
            ...fild.templateOptions,
            label: this.translate.instant(fild.templateOptions.label),
          },
        };

        delete objectToReturn.props;
        if (fild.key !== 'userGroupId') {
          objectToReturn.templateOptions.options =
            fild.templateOptions.options.map((option: any) => ({
              ...option,
              label: this.translate.instant(option.label),
            }));
        }

        return objectToReturn;
      }

      const label = fild.props.label;
      return {
        ...fild,
        props: {
          ...fild.props,
          label: this.translate.instant(label),
        },
      };
    });
  }
}
