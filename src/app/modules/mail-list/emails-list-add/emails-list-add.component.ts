import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { emailsFields as fields } from '../config/email-list.form';
import { Router } from '@angular/router';
import { MailList, MailListsService } from 'src/app/shared/services/swagger';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-emails-list-add',
  templateUrl: './emails-list-add.component.html',
  styleUrls: ['./emails-list-add.component.scss'],
})
export class EmailsListAddComponent implements OnInit {
  form = new FormGroup({});
  model: MailList = {};
  options: FormlyFormOptions = {};
  fieldsTemplate: FormlyFieldConfig[] = fields;
  fields: FormlyFieldConfig[] = fields;

  constructor(
    private title: TitleService,
    private router: Router,
    private mailListService: MailListsService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.title.changeTitle('email.title-add');
    this.rebuildFields();
    this.translate.onLangChange.subscribe(() => {
      this.rebuildFields();
      this.title.changeTitle('email.title-add');
    });
  }

  submit() {
    if (this.form.valid) {
      const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
      let valid = true;
      (this.model.mailListAddresses as any).forEach((element: string) => {
        if (!regex.test(element)) {
          alert('Un correo es inválido "' + element + '"');
          valid = false;
        }
      });

      if (!valid) {
        return;
      }

      this.mailListService
        .apiMailListsPost({
          mailListAddresses: (this.model.mailListAddresses || ([] as any)).join(
            ';'
          ),
          mailListName: this.model.mailListName,
        })
        .subscribe(
          (res) => {
            this.router.navigate(['/email-list']);
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
