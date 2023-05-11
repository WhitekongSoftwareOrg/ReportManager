import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { siteFields as fields } from '../config/site.form';
import { CentralsService } from 'src/app/shared/services/swagger';
import { Central } from 'src/app/shared/services/swagger/model/central';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.scss'],
})
export class AddSiteComponent implements OnInit {
  form = new FormGroup({});
  model: Central = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = fields;
  fieldsTemplate: FormlyFieldConfig[] = fields;

  constructor(
    private title: TitleService,
    private router: Router,
    private centralsService: CentralsService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.title.changeTitle('sites.title-add');
    this.rebuildFields();
    this.translate.onLangChange.subscribe(() => {
      this.rebuildFields();
      this.title.changeTitle('sites.title-add');
    });
  }

  submit() {
    if (this.form.valid) {
      this.centralsService
        .apiCentralsPost({
          centralCity: this.model.centralCity,
          centralCode: this.model.centralCode,
          centralCountry: this.model.centralCountry,
          centralDescription: this.model.centralDescription,
          centralId: this.model.centralId,
          // centralParentId: this.model.centralParentId,
          centralRegion: this.model.centralRegion,
        })
        .subscribe(
          (res) => {
            this.router.navigate(['/sites']);
          },
          (error) => {
            alert('Ha ocurrido un error durante la creación de sitios');
          }
        );
    }
  }

  rebuildFields() {
    this.fields = this.fieldsTemplate.map((fild: any) => {
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
