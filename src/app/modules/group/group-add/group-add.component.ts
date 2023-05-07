import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { groupFields as fields } from '../config/group.form';
import { UserGroup, UserGroupService } from 'src/app/shared/services/swagger';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group-add',
  templateUrl: './group-add.component.html',
  styleUrls: ['./group-add.component.scss'],
})
export class GroupAddComponent implements OnInit {
  form = new FormGroup({});
  model: UserGroup = {};
  options: FormlyFormOptions = {};

  constructor(
    private title: TitleService,
    private userGroupService: UserGroupService,
    private router: Router,
    ) {}

  ngOnInit(): void {
    this.title.changeTitle('Añadir grupo');
  }

  fields: FormlyFieldConfig[] = fields;

  submit() {
    if (this.form.valid) {
      this.userGroupService.apiUserGroupPost({
        userGroupDescription: this.model.userGroupDescription,
        userGroupName: this.model.userGroupName,
      }).subscribe(res => {
        this.router.navigate(['/groups']);
      }, error => {
        alert('Ha ocurrido un error durante la creación de sitios')
      })
    }
  }
}
