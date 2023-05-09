import { FormlyFieldConfig } from '@ngx-formly/core';

export const reportFields: FormlyFieldConfig[] = [
  {
    key: 'reportName',
    type: 'input',
    props: {
      label: 'Nombre',
      required: true,
    },
  },
  {
    key: 'reportDescription',
    type: 'textarea',
    props: {
      label: 'Descripción',
      required: true,
    },
  },
  {
    key: 'centralId',
    type: 'select',
    templateOptions: {
      label: 'Sitio',
      required: true,
      options: [],
    }},
  {
    key: 'reportUserGroupId',
    type: 'select',
    templateOptions: {
      label: 'Grupo',
      required: true,
      options: [],
    },
  },
  {
    key: 'periodicityId',
    type: 'select',
    templateOptions: {
      label: 'Periodicidad',
      required: true,
      options: [
        {
          value: 1,
          label: 'Daily',
        },
        {
          value: 2,
          label: 'Monthly',
        },
        {
          value: 3,
          label: 'Yearly',
        },
      ],
    },
  },
  {
    key: 'reportFirstDate',
    type: 'datepicker',
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
    key: 'reportDateCell',
    type: 'input',
    props: {
      label: 'Celda de la fecha',
      required: true,
    },
  },
  {
    key: 'reportExcelFileName',
    type: 'input',
    props: {
      label: 'Nombre del fichero',
      required: true,
    },
  },
  {
    key: 'file',
    type: 'file',
    props: {
      label: 'Fichero',
      required: true,
    },
  },
  {
    key: 'reportPreExecutionExcelMacro',
    type: 'input',
    props: {
      label: 'Macro Excel a ejecutar antes del cálculo del informe',
    },
  },
  {
    key: 'reportPostExecutionExcelMacro',
    type: 'input',
    props: {
      label: 'Macro Excel a ejecutar tras el cálculo del informe',
    },
  },
  {
    key: 'reportAttachedFileNameFormat',
    type: 'input',
    defaultValue: '${ReportName} - ${Date}',
    props: {
      label: 'Formato de nombre notificaciones',
      required: true,
    },
  },
  {
    key: 'reportFileNameFormat',
    type: 'input',
    defaultValue: '${ReportManager} - ${Date} - ${Id}',
    expressions: {
      hide: 'true',
    },
    props: {
      label: '',
      required: true,
      hidden: true
    },
  },
  {
    key: 'reportAdminNote',
    type: 'textarea',
    props: {
      label: 'Notas',
    },
  },
  {
    key: 'reportValidationRequired',
    type: 'checkbox',
    props: {
      label: '¿Requiere validación?',
    },
  },
  {
    key: 'reportOpRange',
    type: 'input',
    props: {
      label: 'Rango para comentarios del operador',
    },
  },
  {
    key: 'reportExecHour',
    type: 'select',
    templateOptions: {
      label: 'Hora de ejecución',
      required: true,
      options: [
        {
          value: '0',
          label: '00:00',
        },
        {
          value: 1,
          label: '01:00',
        },
        {
          value: 2,
          label: '02:00',
        },
        {
          value: 3,
          label: '03:00',
        },
        {
          value: 4,
          label: '04:00',
        },
        {
          value: 5,
          label: '05:00',
        },
        {
          value: 6,
          label: '06:00',
        },
        {
          value: 7,
          label: '07:00',
        },
        {
          value: 8,
          label: '08:00',
        },
        {
          value: 9,
          label: '09:00',
        },
        {
          value: 10,
          label: '10:00',
        },
        {
          value: 11,
          label: '11:00',
        },
        {
          value: 12,
          label: '12:00',
        },
        {
          value: 13,
          label: '13:00',
        },
        {
          value: 14,
          label: '14:00',
        },
        {
          value: 15,
          label: '15:00',
        },
        {
          value: 16,
          label: '16:00',
        },
        {
          value: 17,
          label: '17:00',
        },
        {
          value: 18,
          label: '18:00',
        },
        {
          value: 19,
          label: '19:00',
        },
        {
          value: 20,
          label: '20:00',
        },
        {
          value: 21,
          label: '21:00',
        },
        {
          value: 22,
          label: '22:00',
        },
        {
          value: 23,
          label: '23:00',
        },
      ],
    },
  },
  {
    key: 'mailListId',
    type: 'select',
    props: {
      label: 'Lista de correo',
      required: true,
      options: []
    },
  },
  {
    key: 'revisionMailListId',
    type: 'select',
    props: {
      label: 'Lista de correo',
      required: true,
      options: []
    },
  },
  {
    key: 'reportDeleted',
    type: 'checkbox',
    props: {
      label: 'Deshabilitado',
    },
  },
];
