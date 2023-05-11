import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { userFields as fields } from '../config/user.form';
import { User, UserGroupService, UserService } from 'src/app/shared/services/swagger';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  form = new FormGroup({});
  model: User = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = fields;

  constructor(
    private title: TitleService,
    private router: Router,
    private userService: UserService,
    private userGroupService: UserGroupService
  ) { }

  ngOnInit(): void {
    this.title.changeTitle('user.title-add');
    this.userGroupService.apiUserGroupGet().subscribe(res => {
      (fields.find((f: any) => f.key === 'userGroupId') as any).templateOptions.options =
        (res as any).list.map((r: any) => ({ value: r.userGroupId, label: r.userGroupName }))

      if ((res as any).list && (res as any).list[0]) {
        this.model.userGroupId = (res as any).list[0].userGroupId
      }

      this.model.userRol = 'User';
      this.form.patchValue(this.model)
    })
  }


  submit() {
    if (this.form.valid) {
      this.userService.apiUserGet(
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        this.model.userLogin
      ).subscribe(res => {
        if (res.list?.length && res.list.find(u => u.userLogin === this.model.userLogin)) {
          alert('Ya existe un usuario con ese login');
          return;
        }
        this.userService.apiUserPost({
          ...this.model,
        }).subscribe(res => {
          this.router.navigate(['/users']);
        }, error => {
          alert('Ha ocurrido un error durante la creación de usuarios')
        })
      })
    }
  }
}
