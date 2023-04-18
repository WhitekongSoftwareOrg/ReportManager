import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { SiteMockService } from 'src/app/core/mock/sites.mock';
import { siteFields } from '../config/site.form';

@Component({
  selector: 'app-edit-site',
  templateUrl: './edit-site.component.html',
  styleUrls: ['./edit-site.component.scss'],
})
export class EditSiteComponent implements OnInit {
  id: string | number = '';
  site: any = {};
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = siteFields;

  constructor(
    private title: TitleService,
    private route: ActivatedRoute,
    private mock: SiteMockService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.title.changeTitle('Editar Sitio');
    this.route.params.subscribe((params: any) => {
      this.id = params.id - 1;
    });

    this.mock.getSitesById(this.id).subscribe((data) => {
      this.site = data;
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
        defaultValue: this.site.name,

        props: {
          label: 'Sitio',
          required: true,
          cols: 12,
        },
      },
      {
        key: 'city',
        type: 'input',
        defaultValue: this.site.city,

        props: {
          label: 'Ciudad',
          required: true,
        },
      },
      {
        key: 'region',
        type: 'input',
        defaultValue: this.site.region,
        props: {
          label: 'Región',
          required: true,
        },
      },
      {
        key: 'country',
        type: 'input',
        defaultValue: this.site.country,
        props: {
          label: 'País',
          required: true,
        },
      },

      {
        key: 'description',
        type: 'textarea',
        defaultValue: this.site.description,
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
