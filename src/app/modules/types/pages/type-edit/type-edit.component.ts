import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { ActivatedRoute, Router } from '@angular/router';
import { typeFields as fields, typeFields } from '../../config/type.form';
import {
  PeriodicitiesService,
  Periodicity,
} from 'src/app/shared/services/swagger';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-type-edit',
  templateUrl: './type-edit.component.html',
  styleUrls: ['./type-edit.component.scss'],
})
export class TypeEditComponent implements OnInit {
  id: string | number = '';
  data: Periodicity = {};
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = fields;
  fieldsTemplate: FormlyFieldConfig[] = fields;

  constructor(
    private title: TitleService,
    private route: ActivatedRoute,
    private periodicitiesService: PeriodicitiesService,
    private router: Router,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.title.changeTitle('types.title-edit');

    this.route.params.subscribe((params: any) => {
      this.id = params.id;
    });

    if (this.id) {
      this.periodicitiesService
        .apiPeriodicitiesIdGet(this.id as any)
        .subscribe((res) => {
          this.data = res;
          this.setData();
          this.fieldsTemplate = this.fields;
          this.rebuildFields();
        });
    }

    this.translate.onLangChange.subscribe(() => {
      this.title.changeTitle('types.title-edit');
      this.rebuildFields();
    });
  }

  setData() {
    this.fields = Object.keys(this.data).map((siteProp: any) => ({
      ...typeFields.find((field: any) => field.key === siteProp),
      defaultValue: (this.data as any)[siteProp],
    }));
  }

  submit() {
    if (this.form.valid) {
      this.periodicitiesService
        .apiPeriodicitiesIdPut(this.id as any, {
          ...this.form.value,
          periodicityId: this.id,
        })
        .subscribe(
          (res) => {
            this.router.navigate(['/types']);
          },
          (error) => alert('Ha ocurrido un error')
        );
    }
  }

  rebuildFields() {
    this.fields = this.fieldsTemplate.map((fild: any) => {
      if (!fild?.props?.label) {
        return;
      }

      if (fild.type === 'radio') {
        const { label, options } = fild.templateOptions;
        return {
          ...fild,
          props: {
            ...fild.props,
            label: this.translate.instant(label),
            options: options.map((option: any) => ({
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
