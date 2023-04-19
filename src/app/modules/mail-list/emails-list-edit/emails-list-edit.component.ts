import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmailsListMockService as mock } from 'src/app/core/mock/email-list.mock';
import { TitleService } from 'src/app/shared/services/title.service';
import { emailsFields as fields } from '../config/email-list.form';

@Component({
  selector: 'app-emails-list-edit',
  templateUrl: './emails-list-edit.component.html',
  styleUrls: ['./emails-list-edit.component.scss'],
})
export class EmailsListEditComponent implements OnInit {
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
    this.title.changeTitle('Editar lista de correos');

    this.route.params.subscribe((params: any) => {
      this.id = params.id;
    });

    this.mock.getEmailListById(this.id).subscribe((data) => {
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
          label: 'Lista de correos',
          required: true,
        },
      },
      {
        key: 'list',
        type: 'textarea',
        defaultValue: this.list.list,
        props: {
          label: 'Correos (separados por comas)',
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
