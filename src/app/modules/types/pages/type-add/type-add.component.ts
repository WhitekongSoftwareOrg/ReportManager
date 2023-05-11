import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { typeFields } from '../../config/type.form';
import {
  PeriodicitiesService,
  Periodicity,
} from 'src/app/shared/services/swagger';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-type-add',
  templateUrl: './type-add.component.html',
  styleUrls: ['./type-add.component.scss'],
})
export class TypeAddComponent implements OnInit {
  form = new FormGroup({});
  model: Periodicity = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = typeFields;
  fieldsTemplate: FormlyFieldConfig[] = typeFields;

  constructor(
    private title: TitleService,
    private router: Router,
    private periodicitiesService: PeriodicitiesService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.title.changeTitle('types.title-add');
    this.rebuildFields();
    this.translate.onLangChange.subscribe(() => {
      this.rebuildFields();
      this.title.changeTitle('sites.title-add');
    });
  }

  submit() {
    if (this.form.valid) {
      console.log(this.model);
      this.periodicitiesService
        .apiPeriodicitiesPost({
          periodicityDescription: this.model.periodicityDescription,
          // periodicityId: this.model.periodicityId,
          periodicityName: this.model.periodicityName,
          periodicityQuantity: this.model.periodicityQuantity,
          periodicityType: this.model.periodicityType,
        })
        .subscribe(
          (res) => {
            this.router.navigate(['/types']);
          },
          (error) => {
            alert('Ha ocurrido un error durante la creación de tipos');
          }
        );
    }
  }

  rebuildFields() {
    this.fields = this.fieldsTemplate.map((fild: any) => {
      if (fild.type === 'radio') {
        const label = fild.templateOptions.label;
        return {
          ...fild,
          templateOptions: {
            label: this.translate.instant(label),
            options: fild.templateOptions.options.map((option: any) => ({
              ...option,
              label: this.translate.instant(option.label),
            })),
          },
        };
      }
      const label = fild.props.label;

      return {
        ...fild,
        props: {
          ...fild.props,
          label: this.translate.instant(label),
        },
      };
    });
  }
}
