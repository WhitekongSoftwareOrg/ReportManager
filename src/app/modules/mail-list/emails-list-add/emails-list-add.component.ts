import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { emailsFields as fields } from '../config/email-list.form';



@Component({
  selector: 'app-emails-list-add',
  templateUrl: './emails-list-add.component.html',
  styleUrls: ['./emails-list-add.component.scss']
})
export class EmailsListAddComponent implements OnInit {

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  constructor(private title: TitleService) {}

  ngOnInit(): void {
    this.title.changeTitle('Añadir lista de correos');
  }

  fields: FormlyFieldConfig[] = fields;

  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }

}
