import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TitleService } from 'src/app/shared/services/title.service';
import { emailsFields as fields, emailsFields } from '../config/email-list.form';
import { MailList, MailListsService } from 'src/app/shared/services/swagger';

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

  constructor(
    private title: TitleService,
    private route: ActivatedRoute,
    private router: Router,
    private mailListService: MailListsService
  ) {}

  ngOnInit(): void {
    this.title.changeTitle('Editar lista de correos');
    this.route.params.subscribe((params: any) => {
      this.id = params.id;
    });

    if (this.id) {
      this.mailListService.apiMailListsIdGet(this.id as any).subscribe(res => {
        this.site = res
        this.setData();
      })
    }
  }

  setData() {
    this.fields = Object.keys(this.site).map((siteProp: any) => (
      {
        ...emailsFields.find((field: any) => field.key === siteProp),
        defaultValue: siteProp === 'mailListAddresses' ? (this.site as any)[siteProp].split(';') : (this.site as any)[siteProp]
      }
    ))
  }

  submit() {
    if (this.form.valid) {
      this.mailListService.apiMailListsIdPut(this.id as any, {
        ...this.form.value,
        mailListAddresses: this.form.value.mailListAddresses.join(';'),
        mailListId: this.id,
      }).subscribe(res => {
        this.router.navigate(['/email-list']);
      }, error => alert('Ha ocurrido un error'))
    }
  }
}
