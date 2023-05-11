import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { ActivatedRoute, Router } from '@angular/router';
import { siteFields as fields, siteFields } from '../config/site.form';
import { Central, CentralsService } from 'src/app/shared/services/swagger';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-edit-site',
  templateUrl: './edit-site.component.html',
  styleUrls: ['./edit-site.component.scss'],
})
export class EditSiteComponent implements OnInit {
  id: string | number = '';
  site: Central = {};
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = fields;
  fieldsTemplate: FormlyFieldConfig[] = fields;

  constructor(
    private title: TitleService,
    private route: ActivatedRoute,
    private router: Router,
    private centralService: CentralsService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.title.changeTitle('sites.title-edit');

    this.route.params.subscribe((params: any) => {
      this.id = params.id;
    });

    if (this.id) {
      this.centralService.apiCentralsIdGet(this.id as any).subscribe((res) => {
        this.site = res;
        this.setData();
        this.fieldsTemplate = this.fields;
        this.rebuildFields();
      });
    }

    this.translate.onLangChange.subscribe(() => {
      this.title.changeTitle('sites.title-edit');
      this.rebuildFields();
    });
  }

  setData() {
    this.fields = Object.keys(this.site).map((siteProp: any) => ({
      ...siteFields.find((field: any) => field.key === siteProp),
      defaultValue: (this.site as any)[siteProp],
    }));
  }

  submit() {
    if (this.form.valid) {
      this.centralService
        .apiCentralsIdPut(this.id as any, {
          ...this.form.value,
          centralId: this.id,
        })
        .subscribe(
          (res) => {
            this.router.navigate(['../']);
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

      return {
        ...fild,
        props: {
          ...fild.props,
          label: this.translate.instant(fild.props.label),
        },
      };
    });
  }
}
