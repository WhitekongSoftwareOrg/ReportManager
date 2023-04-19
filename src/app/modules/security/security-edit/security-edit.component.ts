import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SecurityFields as fields } from '../config/secutiry.form';
import { SecurityListMockService as mock } from 'src/app/core/mock/security.mocks';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-security-edit',
  templateUrl: './security-edit.component.html',
  styleUrls: ['./security-edit.component.scss'],
})
export class SecurityEditComponent implements OnInit {
  id: string | number = '';
  list: any = {};
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = fields;

  constructor(
    private title: TitleService,
    private mock: mock,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.title.changeTitle('Editar entrada de seguridad');

    this.route.params.subscribe((params: any) => {
      this.id = params.id;
    });

    this.mock.getSecurityListById(this.id).subscribe((data) => {
      this.list = data;
    });

    setTimeout(() => {
      this.setData();
    }, 500);
  }

  setData() {
    this.fields = [
      {
        key: 'name',
        type: 'input',
        defaultValue: this.list.name,
        props: {
          label: 'Nombre',
          required: true,
        },
      },
      {
        key: 'windowsName',
        type: 'input',
        defaultValue: this.list.windowsName,
        props: {
          label: 'Apellido',
          required: true,
        },
      },
      {
        key: 'windowsGroup',
        defaultValue: this.list.windowsGroup,
        type: 'input',
        props: {
          label: 'Login',
          required: true,
        },
      },
      {
        key: 'group',
        defaultValue: this.list.group,
        type: 'select',
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
        defaultValue: this.list.role,
        type: 'select',
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
      {
        key: 'site',
        defaultValue: this.list.site,
        type: 'select',
        templateOptions: {
          label: 'Sitio',
          required: true,
          options: [
            {
              value: 'Sitio1',
              label: 'site1',
            },
            {
              value: 'Sitio2',
              label: 'site2',
            },
            {
              value: 'Sitio3',
              label: 'site3',
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
