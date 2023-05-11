import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { typeFields } from '../../config/type.form';
import { PeriodicitiesService, Periodicity } from 'src/app/shared/services/swagger';
import { Router } from '@angular/router';

@Component({
  selector: 'app-type-add',
  templateUrl: './type-add.component.html',
  styleUrls: ['./type-add.component.scss'],
})
export class TypeAddComponent implements OnInit {
  form = new FormGroup({});
  model: Periodicity = {};
  options: FormlyFormOptions = {};

  constructor(
    private title: TitleService,
    private router: Router,
    private periodicitiesService: PeriodicitiesService
    ) {}

  ngOnInit(): void {
    this.title.changeTitle('types.title-add');
  }

  fields: FormlyFieldConfig[] = typeFields;

  submit() {
    if (this.form.valid) {
      console.log(this.model)
      this.periodicitiesService.apiPeriodicitiesPost({
        periodicityDescription: this.model.periodicityDescription,
        // periodicityId: this.model.periodicityId,
        periodicityName: this.model.periodicityName,
        periodicityQuantity: this.model.periodicityQuantity,
        periodicityType: this.model.periodicityType,
      }).subscribe(res => {
        this.router.navigate(['/types']);
      }, error => {
        alert('Ha ocurrido un error durante la creación de tipos')
      })
    }
  }
}
