import { FormlyFieldConfig } from "@ngx-formly/core";

export const emailsFields: FormlyFieldConfig[] = [
  {
    key: 'name',
    type: 'input',
    props: {
      label: 'Lista de correos',
      required: true,
    },
  },
  {
    key: 'list',
    type: 'textarea',
    props: {
      label: 'Correos (separados por comas)',
      required: true,
      maxLength: 100,
      rows: 5,
    },
  },
];
