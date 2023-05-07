import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { ActivatedRoute, Router } from '@angular/router';
import { typeFields as fields, typeFields } from '../../config/type.form';
import { PeriodicitiesService, Periodicity } from 'src/app/shared/services/swagger';

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

  constructor(
    private title: TitleService,
    private route: ActivatedRoute,
    private periodicitiesService: PeriodicitiesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.title.changeTitle('Editar Periodicidad');
    this.route.params.subscribe((params: any) => {
      this.id = params.id;
    });

    if (this.id) {
      this.periodicitiesService.apiPeriodicitiesIdGet(this.id as any).subscribe(res => {
        this.data = res
        this.setData();
      })
    }
  }

  setData() {
    this.fields = Object.keys(this.data).map((siteProp: any) => (
      {
        ...typeFields.find((field: any) => field.key === siteProp),
        defaultValue: (this.data as any)[siteProp]
      }
    ))
  }

  submit() {
    if (this.form.valid) {
      this.periodicitiesService.apiPeriodicitiesIdPut(this.id as any, {
        ...this.form.value,
        periodicityId: this.id,
      }).subscribe(res => {
        this.router.navigate(['/types']);
      }, error => alert('Ha ocurrido un error'))
    }
  }
}
