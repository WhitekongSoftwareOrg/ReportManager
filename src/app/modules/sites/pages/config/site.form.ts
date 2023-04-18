import { FormlyFieldConfig } from "@ngx-formly/core";

export const siteFields: FormlyFieldConfig[] = [
  {
    key: 'sitio',
    type: 'input',
    props: {
      label: 'Sitio',
      required: true,
    },
  },
  {
    key: 'city',
    type: 'input',
    props: {
      label: 'Ciudad',
      required: true,
    },
  },
  {
    key: 'region',
    type: 'input',
    props: {
      label: 'Región',
      required: true,
    },
  },
  {
    key: 'country',
    type: 'input',
    props: {
      label: 'País',
      required: true,
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
