import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.scss'],
})
export class AddSiteComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  constructor(private title: TitleService) {}

  ngOnInit(): void {
    this.title.changeTitle('Añadir Sitio');
  }

  fields: FormlyFieldConfig[] = [
    {
      key: 'sitio',
      type: 'input',
      props: {
        label: 'Sitio',
        required: true,
      },
    },
    {
      key: 'city',
      type: 'input',
      props: {
        label: 'Ciudad',
        required: true,
      },
    },
    {
      key: 'region',
      type: 'input',
      props: {
        label: 'Región',
        required: true,
      },
    },
    {
      key: 'country',
      type: 'input',
      props: {
        label: 'País',
        required: true,
      },
    },

    {
      key: 'description',
      type: 'textarea',
      props: {
        label: 'Descripción',
        required: true,
        maxLength: 100,
        rows: 5,
      },
    },
  ];

  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
}
