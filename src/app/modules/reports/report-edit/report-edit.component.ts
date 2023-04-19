import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { reportFields as fields } from '../config/report.forms';
import { ReporttMockService as mock } from 'src/app/core/mock/report.mock';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-report-edit',
  templateUrl: './report-edit.component.html',
  styleUrls: ['./report-edit.component.scss'],
})
export class ReportEditComponent implements OnInit {
  id: string | number = '';
  report: any = {};
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = fields;

  constructor(
    private title: TitleService,
    private mock: mock,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.title.changeTitle('Editar grupo');

    this.route.params.subscribe((params: any) => {
      this.id = params.id;
    });

    this.mock.getReportById(this.id).subscribe((data) => {
      this.report = data;
    });

    setTimeout(() => {
      this.setData();
    }, 500);
  }

  setData() {
    this.fields = [
      {
        key: 'name',
        type: 'input',
        defaultValue: this.report.name ?? '',
        props: {
          label: 'Nombre',
          required: true,
        },
      },
      {
        key: 'type',
        type: 'radio',
        defaultValue: this.report.type ?? '',
        templateOptions: {
          label: 'Radio',
          required: true,
          options: [
            {
              value: 'daily',
              label: 'Diario',
            },
            {
              value: 'weekly',
              label: 'Semanal',
            },
            {
              value: 'mountly',
              label: 'Mensual',
            },
            {
              value: 'yearly',
              label: 'Anual',
            },
          ],
        },
      },
      {
        key: 'site',
        type: 'select',
        defaultValue: this.report.site ?? '',
        templateOptions: {
          label: 'Sitios',
          required: true,
          options: [
            {
              value: 'site1',
              label: 'Sitio 1',
            },
            {
              value: 'site2',
              label: 'Sitio 2',
            },
            {
              value: 'site3',
              label: 'Sitio 3',
            },
            {
              value: 'site4',
              label: 'Sitio 4',
            },
          ],
        },
      },
      {
        key: 'group',
        type: 'select',
        defaultValue: this.report.group ?? '',
        templateOptions: {
          label: 'Grupo',
          required: true,
          options: [
            {
              value: 'sales',
              label: 'Ventas',
            },
            {
              value: 'marketing',
              label: 'Marketing',
            },
            {
              value: 'development',
              label: 'Desarrollo',
            },
            {
              value: 'admon',
              label: 'Administradores',
            },
          ],
        },
      },
      {
        key: 'first_execution',
        type: 'datepicker',
        defaultValue: this.report.first_execution ?? '',
        props: {
          label: 'Primera ejecución',
          required: true,
          dateFormat: 'yy/mm/dd',
          hourFormat: '24',
          numberOfMonths: 1,
          selectionMode: 'single',
          readonlyInput: false,
          showTime: false,
          showButtonBar: true,
          showIcon: true,
          showOtherMonths: true,
          selectOtherMonths: false,
          monthNavigator: false,
          yearNavigator: false,
          yearRange: '2020:2030',
          inline: false,
        },
      },
      {
        key: 'date_cell',
        type: 'datepicker',
        defaultValue: this.report.date_cell ?? '',
        props: {
          label: 'Celda de la fecha',
          required: true,
          dateFormat: 'yy/mm/dd',
          hourFormat: '24',
          numberOfMonths: 1,
          selectionMode: 'single',
          readonlyInput: false,
          showTime: false,
          showButtonBar: true,
          showIcon: true,
          showOtherMonths: true,
          selectOtherMonths: false,
          monthNavigator: false,
          yearNavigator: false,
          yearRange: '2020:2030',
          inline: false,
        },
      },
      {
        key: 'file_name',
        type: 'file',
        defaultValue: this.report.file_name ?? '',
        props: {
          label: 'Nombre del fichero',
          required: true,
        },
      },
      {
        key: 'macro_before',
        type: 'input',
        defaultValue: this.report.macro_before ?? '',
        props: {
          label: 'Macro Excel a ejecutar antes del cálculo del informe',
        },
      },
      {
        key: 'macro_after',
        defaultValue: this.report.macro_after ?? '',
        type: 'input',
        props: {
          label: 'Macro Excel a ejecutar tras el cálculo del informe',
        },
      },
      {
        key: 'notification_format',
        type: 'input',
        defaultValue: this.report.notification_format ?? '',
        props: {
          label: 'Formato de nombre notificaciones',
          required: true,
        },
      },
      {
        key: 'description',
        defaultValue: this.report.description ?? '',
        type: 'input',
        props: {
          label: 'Notas',
        },
      },
      {
        key: 'validation_required',
        defaultValue: this.report.validation_required ?? '',
        type: 'checkbox',
        props: {
          label: '¿Requiere validación?',
        },
      },
      {
        key: 'comment_range',
        defaultValue: this.report.comment_range ?? '',
        type: 'input',
        props: {
          label: 'Rango para comentarios del operador',
        },
      },
      {
        key: 'execution_time',
        type: 'datepicker',
        defaultValue: this.report.execution_time ?? '',
        props: {
          label: 'Hora de ejecución (UTC)',
          required: true,
          dateFormat: 'yy/mm/dd',
          hourFormat: '24',
          numberOfMonths: 1,
          selectionMode: 'single',
          readonlyInput: false,
          showTime: false,
          showButtonBar: true,
          showIcon: true,
          showOtherMonths: true,
          selectOtherMonths: false,
          monthNavigator: false,
          yearNavigator: false,
          yearRange: '2020:2030',
          inline: false,
        },
      },
      {
        key: 'email_list',
        defaultValue: this.report.email_list ?? '',
        type: 'input',
        props: {
          label: 'Lista de correo',
          required: true,
        },
      },
      {
        key: 'review_list',
        defaultValue: this.report.review_list ?? '',
        type: 'input',
        props: {
          label: 'Lista de notificación de revisión',
          required: true,
        },
      },
      {
        key: 'disabled',
        defaultValue: this.report.disabled ?? '',
        type: 'checkbox',
        props: {
          label: 'Deshabilitado',
        },
      },
    ];
  }

  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
    //DO API THINGS
    this.router.navigate(['../']);
  }
}
