import { FormlyFieldConfig } from '@ngx-formly/core';

export const reportFields: FormlyFieldConfig[] = [
  {
    key: 'name',
    type: 'input',
    props: {
      label: 'Nombre',
      required: true,
    },
  },
  {
    key: 'type',
    type: 'radio',
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
    }},
  {
    key: 'site',
    type: 'select',
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
    props: {
      label: 'Nombre del fichero',
      required: true,
    },
  },
  {
    key: 'macro_before',
    type: 'input',
    props: {
      label: 'Macro Excel a ejecutar antes del cálculo del informe',
    },
  },
  {
    key: 'macro_after',
    type: 'input',
    props: {
      label: 'Macro Excel a ejecutar tras el cálculo del informe',
    },
  },
  {
    key: 'notification_format',
    type: 'input',
    props: {
      label: 'Formato de nombre notificaciones',
      required: true,
    },
  },
  {
    key: 'description',
    type: 'input',
    props: {
      label: 'Notas',
    },
  },
  {
    key: 'validation_required',
    type: 'checkbox',
    props: {
      label: '¿Requiere validación?',
    },
  },
  {
    key: 'comment_range',
    type: 'input',
    props: {
      label: 'Rango para comentarios del operador',
    },
  },
  {
    key: 'execution_time',
    type: 'datepicker',
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
    type: 'input',
    props: {
      label: 'Lista de correo',
      required: true,
    },
  },
  {
    key: 'review_list',
    type: 'input',
    props: {
      label: 'Lista de notificación de revisión',
      required: true,
    },
  },
  {
    key: 'disabled',
    type: 'checkbox',
    props: {
      label: 'Deshabilitado',
    },
  },
];
