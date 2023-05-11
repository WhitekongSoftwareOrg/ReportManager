import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { ActivatedRoute, Router } from '@angular/router';
import { siteFields as fields, siteFields } from '../config/site.form';
import { Central, CentralsService } from 'src/app/shared/services/swagger';

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

  constructor(
    private title: TitleService,
    private route: ActivatedRoute,
    private router: Router,
    private centralService: CentralsService
  ) {}

  ngOnInit(): void {
    this.title.changeTitle('sites.title-edit');
    this.route.params.subscribe((params: any) => {
      this.id = params.id;
    });

    if (this.id) {
      this.centralService.apiCentralsIdGet(this.id as any).subscribe(res => {
        this.site = res
        this.setData();
      })
    }
  }

  setData() {
    this.fields = Object.keys(this.site).map((siteProp: any) => (
      {
        ...siteFields.find((field: any) => field.key === siteProp),
        defaultValue: (this.site as any)[siteProp]
      }
    ))
  }

  submit() {
    if (this.form.valid) {
      this.centralService.apiCentralsIdPut(this.id as any, {
        ...this.form.value,
        centralId: this.id,
      }).subscribe(res => {
        this.router.navigate(['../']);
      }, error => alert('Ha ocurrido un error'))
    }
  }
}
