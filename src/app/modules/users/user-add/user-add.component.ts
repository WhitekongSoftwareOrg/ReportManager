import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { userFields as fields } from '../config/user.form';
@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  constructor(private title: TitleService) {}

  ngOnInit(): void {
    this.title.changeTitle('Añadir usuario');
  }

  fields: FormlyFieldConfig[] = fields;

  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
}
