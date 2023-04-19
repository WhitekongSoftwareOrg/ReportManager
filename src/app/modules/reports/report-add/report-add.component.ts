import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { reportFields as fields } from '../config/report.forms';

@Component({
  selector: 'app-report-add',
  templateUrl: './report-add.component.html',
  styleUrls: ['./report-add.component.scss'],
})
export class ReportAddComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  constructor(private title: TitleService) {}

  ngOnInit(): void {
    this.title.changeTitle('Añadir informe');
  }

  fields: FormlyFieldConfig[] = fields;

  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
}
