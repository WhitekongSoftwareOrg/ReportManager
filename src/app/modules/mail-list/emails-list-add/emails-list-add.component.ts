import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { emailsFields as fields } from '../config/email-list.form';
import { Router } from '@angular/router';
import { MailList, MailListsService } from 'src/app/shared/services/swagger';

@Component({
  selector: 'app-emails-list-add',
  templateUrl: './emails-list-add.component.html',
  styleUrls: ['./emails-list-add.component.scss']
})
export class EmailsListAddComponent implements OnInit {
  form = new FormGroup({});
  model: MailList = {};
  options: FormlyFormOptions = {};

  constructor(
    private title: TitleService,
    private router: Router,
    private mailListService: MailListsService
  ) { }

  ngOnInit(): void {
    this.title.changeTitle('Añadir Lista de correos');
  }

  fields: FormlyFieldConfig[] = fields;

  submit() {
    if (this.form.valid) {
      const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
      let valid = true;
      (this.model.mailListAddresses as any).forEach((element: string) => {
        if (!regex.test(element)) {
          alert('Un correo es inválido "' + element + '"')
          valid = false;
        }
      });

      if (!valid) {
        return;
      }

      this.mailListService.apiMailListsPost({
        mailListAddresses: (this.model.mailListAddresses || [] as any).join(';'),
        mailListName: this.model.mailListName,
      }).subscribe(res => {
        this.router.navigate(['/email-list']);
      }, error => {
        alert('Ha ocurrido un error durante la creación de sitios')
      })
    }
  }
}
