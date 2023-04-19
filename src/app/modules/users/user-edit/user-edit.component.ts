import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserMockService as mock } from 'src/app/core/mock/users.mock';
import { userFields as fields } from '../config/user.form';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  id: string | number = '';
  data: any = {};
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = fields;

  constructor(
    private title: TitleService,
    private route: ActivatedRoute,
    private mock: mock,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.title.changeTitle('Editar usuario');
    this.route.params.subscribe((params: any) => {
      this.id = params.id;
    });

    this.mock.getUserById(this.id).subscribe((data) => {
      this.data = data;
    });
    setTimeout(() => {
      this.setData();
    }, 200);
  }

  setData() {
    this.fields = [
      {
        key: 'name',
        type: 'input',
        defaultValue: this.data.name,
        props: {
          label: 'Sitio',
          required: true,
          cols: 12,
        },
      },
      {
        key: 'lastName',
        type: 'input',
        defaultValue: this.data.lastName,

        props: {
          label: 'Ciudad',
          required: true,
        },
      },
      {
        key: 'login',
        type: 'input',
        defaultValue: this.data.login,
        props: {
          label: 'Login',
          required: true,
        },
      },
      {
        key: 'password',
        type: 'input',
        defaultValue: this.data.password,
        props: {
          label: 'Contraseña',
          required: true,
        },
      },

      {
        key: 'group',
        type: 'select',
        defaultValue: this.data.group,
        templateOptions: {
          label: 'Grupo',
          required: true,
          options: [
            {
              value: 'sales',
              label: 'Ventas',
            },
            {
              value: 'marketing',
              label: 'Marketing',
            },
            {
              value: 'development',
              label: 'Desarrollo',
            },
            {
              value: 'admon',
              label: 'Administradores',
            },
          ],
        },
      },
      {
        key: 'role',
        type: 'select',
        defaultValue: this.data.role,
        templateOptions: {
          label: 'Rol',
          required: true,
          options: [
            {
              value: 'admin',
              label: 'Administrador',
            },
            {
              value: 'editor',
              label: 'Editor',
            },
            {
              value: 'user',
              label: 'Usuario',
            },
            {
              value: 'guest',
              label: 'Invitado',
            },
          ],
        },
      },
    ];
  }

  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
    //DO API THINGS
    this.router.navigate(['../']);
  }
}
