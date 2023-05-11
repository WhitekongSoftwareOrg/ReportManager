import { FormlyFieldConfig } from '@ngx-formly/core';

export const typeFields: FormlyFieldConfig[] = [
  {
    key: 'periodicityName',
    type: 'input',
    props: {
      label: 'types.label.periodicity',
      required: true,
    },
  },
  {
    key: 'periodicityQuantity',
    type: 'input',
    props: {
      label: 'types.label.amount',
      type: 'number',
      required: true,
      allowedKeys: '[0-9]',
    },
  },
  {
    key: 'periodicityType',
    type: 'radio',
    templateOptions: {
      label: 'types.label.type',
      required: true,
      options: [
        {
          value: 1,
          label: 'types.label.daily',
        },
        {
          value: 2,
          label: 'types.label.weekly',
        },
        {
          value: 3,
          label: 'types.label.monthly',
        },
        {
          value: 4,
          label: 'types.label.yearly',
        },
      ],
    },
  },
  {
    key: 'periodicityDescription',
    type: 'textarea',
    props: {
      label: 'types.label.description',
      required: true,
      maxLength: 100,
      rows: 5,
    },
  },
];
