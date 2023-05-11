import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { groupFields as fields } from '../config/group.form';
import { UserGroup, UserGroupService } from 'src/app/shared/services/swagger';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-group-add',
  templateUrl: './group-add.component.html',
  styleUrls: ['./group-add.component.scss'],
})
export class GroupAddComponent implements OnInit {
  form = new FormGroup({});
  model: UserGroup = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = fields;
  fieldsTemplate: FormlyFieldConfig[] = fields;

  constructor(
    private title: TitleService,
    private userGroupService: UserGroupService,
    private router: Router,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.title.changeTitle('group.title-add');
    this.rebuildFields();
    this.translate.onLangChange.subscribe(() => {
      this.title.changeTitle('group.title-add');
      this.rebuildFields();
    });
  }

  submit() {
    if (this.form.valid) {
      this.userGroupService
        .apiUserGroupPost({
          userGroupDescription: this.model.userGroupDescription,
          userGroupName: this.model.userGroupName,
        })
        .subscribe(
          (res) => {
            this.router.navigate(['/groups']);
          },
          (error) => {
            const msg = this.translate.instant('group.error');
            alert(msg);
          }
        );
    }
  }

  rebuildFields() {
    this.fields = this.fieldsTemplate.map((fild: any) => {
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
