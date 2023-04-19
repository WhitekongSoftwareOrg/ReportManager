import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { typeFields } from '../../config/type.form';

@Component({
  selector: 'app-type-add',
  templateUrl: './type-add.component.html',
  styleUrls: ['./type-add.component.scss'],
})
export class TypeAddComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  constructor(private title: TitleService) {}

  ngOnInit(): void {
    this.title.changeTitle('Añadir tipo');
  }

  fields: FormlyFieldConfig[] = typeFields;

  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
}
