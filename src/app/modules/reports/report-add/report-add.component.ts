import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { reportFields as fields, reportFields } from '../config/report.forms';
import { Router } from '@angular/router';
import { CentralsService, MailList, MailListsService, Report, ReportsService, UserGroupService, UserService } from 'src/app/shared/services/swagger';

@Component({
  selector: 'app-report-add',
  templateUrl: './report-add.component.html',
  styleUrls: ['./report-add.component.scss'],
})
export class ReportAddComponent implements OnInit {
  form = new FormGroup({});
  model: Report = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = fields;

  constructor(
    private title: TitleService,
    private router: Router,
    private reportsService: ReportsService,
    private userGroupService: UserGroupService,
    private mailService: MailListsService,
    private centralService: CentralsService,
  ) { }

  ngOnInit(): void {
    this.title.changeTitle('Añadir Informe');
    this.userGroupService.apiUserGroupGet().subscribe(res => {
      (fields.find((f: any) => f.key === 'reportUserGroupId') as any).templateOptions.options =
        (res as any).list.map((r: any) => ({ value: r.userGroupId, label: r.userGroupName }))

      if ((res as any).list && (res as any).list[0]) {
        this.model.reportUserGroupId = (res as any).list[0].userGroupId
      }

      this.centralService.apiCentralsGet().subscribe(_res => {
        (fields.find((f: any) => f.key === 'centralId') as any).templateOptions.options =
          (_res as any).list.map((r: any) => ({ value: r.centralId, label: r.centralCode }))

        if ((_res as any).list && (_res as any).list[0]) {
          this.model.centralId = (_res as any).list[0].centralId
        }

        this.mailService.apiMailListsGet().subscribe(__res => {
          if (!__res || !__res.list?.length) {
            return;
          }

          const mailList = (__res as any).list.map((r: any) => ({ value: r.mailListId, label: r.mailListName }));
          (fields.find((f: any) => f.key === 'mailListId') as any).props.options = mailList;
          (fields.find((f: any) => f.key === 'revisionMailListId') as any).props.options = mailList;

          if ((__res as any).list && (__res as any).list[0]) {
            this.model.mailListId = (__res as any).list[0].mailListId
            this.model.revisionMailListId = (__res as any).list[0].mailListId
          }

          this.model.periodicityId = 1;
          (this.model.reportExecHour as any) = '0';
          this.form.patchValue(this.model);
        })
      })
    })
  }

  submit() {
    if (this.form.valid) {
      let nextDate: Date = new Date(this.model.reportFirstDate as any);
      const newxtDateMethods: any = {
        1: (date: Date, days: number) => {
          date.setDate(date.getDate() + days);
          return date
        },
        2: (date: Date, days: number) => {
          date.setDate(date.getDate() + days * 7);
          return date
        },
        3: (date: Date, months: number) => {
          date.setMonth(date.getMonth() + months);
          return date
        }
      };

      nextDate = newxtDateMethods[this.model.periodicityId || 1](nextDate, 1);

      this.reportsService.apiReportsPost({
        ...this.model,
        reportNextDate: nextDate,
        reportNextUtcDate: new Date(Date.UTC(nextDate.getUTCFullYear(), nextDate.getUTCMonth(),
        nextDate.getUTCDate(), nextDate.getUTCHours(),
        nextDate.getUTCMinutes(), nextDate.getUTCSeconds())),
        userId: Number.parseInt(localStorage.getItem('ctk-userid') || '0'),
        reportFileNameFormat: '${ReportManager} - ${Date} - ${Id}'
      }).subscribe(res => {
        this.router.navigate(['/reports']);
      }, error => {
        alert('Ha ocurrido un error durante la creación de informes')
      })
    }
  }
}
