import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TitleService } from 'src/app/shared/services/title.service';
import {
  emailsFields as fields,
  emailsFields,
} from '../config/email-list.form';
import { MailList, MailListsService } from 'src/app/shared/services/swagger';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-emails-list-edit',
  templateUrl: './emails-list-edit.component.html',
  styleUrls: ['./emails-list-edit.component.scss'],
})
export class EmailsListEditComponent implements OnInit {
  id: string | number = '';
  site: MailList = {};
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = fields;
  fieldsTemplate: FormlyFieldConfig[] = fields;

  constructor(
    private title: TitleService,
    private route: ActivatedRoute,
    private router: Router,
    private mailListService: MailListsService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.title.changeTitle('email.title-edit');
    this.route.params.subscribe((params: any) => {
      this.id = params.id;
    });

    if (this.id) {
      this.mailListService
        .apiMailListsIdGet(this.id as any)
        .subscribe((res) => {
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
      ...emailsFields.find((field: any) => field.key === siteProp),
      defaultValue:
        siteProp === 'mailListAddresses'
          ? (this.site as any)[siteProp].split(';')
          : (this.site as any)[siteProp],
    }));
  }

  submit() {
    if (this.form.valid) {
      this.mailListService
        .apiMailListsIdPut(this.id as any, {
          ...this.form.value,
          mailListAddresses: this.form.value.mailListAddresses.join(';'),
          mailListId: this.id,
        })
        .subscribe(
          (res) => {
            this.router.navigate(['/email-list']);
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
