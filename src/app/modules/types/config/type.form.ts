import { FormlyFieldConfig } from '@ngx-formly/core';

export const typeFields: FormlyFieldConfig[] = [
  {
    key: 'name',
    type: 'input',
    props: {
      label: 'Peridiocidad',
      required: true,
    },
  },
  {
    key: 'amount',
    type: 'input',
    props: {
      label: 'Cantidad',
      type: 'number',
      required: true,
      allowedKeys: '[0-9]',
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
    },
  },
  {
    key: 'description',
    type: 'textarea',
    props: {
      label: 'Descripción',
      required: true,
      maxLength: 100,
      rows: 5,
    },
  },
];
