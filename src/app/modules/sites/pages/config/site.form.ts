import { FormlyFieldConfig } from "@ngx-formly/core";

export const siteFields: FormlyFieldConfig[] = [
  {
    key: 'centralCode',
    type: 'input',
    props: {
      label: 'Sitio',
      required: true,
      maxLength: 5,
    },
  },
  {
    key: 'centralCity',
    type: 'input',
    props: {
      label: 'Ciudad',
      required: true,
      maxLength: 50,
    },
  },
  {
    key: 'centralRegion',
    type: 'input',
    props: {
      label: 'Región',
      required: true,
      maxLength: 50,
    },
  },
  {
    key: 'centralDescription',
    type: 'textarea',
    props: {
      label: 'Descripción',
      required: true,
      maxLength: 50,
    },
  },
  {
    key: 'centralCountry',
    type: 'input',
    props: {
      label: 'País',
      required: true,
      maxLength: 50,
    },
  },
];
