import { FormlyFieldConfig } from '@ngx-formly/core';

export const typeFields: FormlyFieldConfig[] = [
  {
    key: 'periodicityName',
    type: 'input',
    props: {
      label: 'Peridiocidad',
      required: true,
    },
  },
  {
    key: 'periodicityQuantity',
    type: 'input',
    props: {
      label: 'Cantidad',
      type: 'number',
      required: true,
      allowedKeys: '[0-9]',
    },
  },
  {
    key: 'periodicityType',
    type: 'radio',
    templateOptions: {
      label: 'Tipo',
      required: true,
      options: [
        {
          value: 1,
          label: 'Diario',
        },
        {
          value: 2,
          label: 'Semanal',
        },
        {
          value: 3,
          label: 'Mensual',
        },
        {
          value: 4,
          label: 'Anual',
        },
      ],
    },
  },
  {
    key: 'periodicityDescription',
    type: 'textarea',
    props: {
      label: 'Descripción',
      required: true,
      maxLength: 100,
      rows: 5,
    },
  },
];
