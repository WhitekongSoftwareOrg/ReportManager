import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeMockService as mock } from 'src/app/core/mock/type.mock';
import { typeFields as fields } from '../../config/type.form';

@Component({
  selector: 'app-type-edit',
  templateUrl: './type-edit.component.html',
  styleUrls: ['./type-edit.component.scss'],
})
export class TypeEditComponent implements OnInit {
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

    this.mock.getTypeById(this.id).subscribe((data) => {
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
          label: 'Peridiocidad',
          required: true,
        },
      },
      {
        key: 'amount',
        defaultValue: this.data.amount,
        type: 'input',
        props: {
          label: 'Cantidad',
          type: 'number',
          required: true,
          allowedKeys: '[0-9]',
        },
      },
      {
        key: 'type',
        type: 'radio',
        defaultValue: this.data.type,
        templateOptions: {
          label: 'Radio',
          required: true,
          options: [
            {
              value: 'daily',
              label: 'Diario',
            },
            {
              value: 'weekly',
              label: 'Semanal',
            },
            {
              value: 'mountly',
              label: 'Mensual',
            },
            {
              value: 'yearly',
              label: 'Anual',
            },
          ],
        },
      },
      {
        key: 'description',
        defaultValue: this.data.description,
        type: 'textarea',
        props: {
          label: 'Descripción',
          required: true,
          maxLength: 100,
          rows: 5,
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
