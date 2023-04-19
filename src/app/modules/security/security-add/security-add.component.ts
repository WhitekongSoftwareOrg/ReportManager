import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { SecurityFields as fields } from '../config/secutiry.form';

@Component({
  selector: 'app-security-add',
  templateUrl: './security-add.component.html',
  styleUrls: ['./security-add.component.scss'],
})
export class SecurityAddComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  constructor(private title: TitleService) {}

  ngOnInit(): void {
    this.title.changeTitle('Añadir entrada de seguridad');
  }

  fields: FormlyFieldConfig[] = fields;

  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
}
