import { FormlyFieldConfig } from "@ngx-formly/core";

export const groupFields: FormlyFieldConfig[] = [
  {
    key: 'name',
    type: 'input',
    props: {
      label: 'Grupo',
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
