import { FormlyFieldConfig } from "@ngx-formly/core";

export const groupFields: FormlyFieldConfig[] = [
  {
    key: 'userGroupName',
    type: 'input',
    props: {
      label: 'Grupo',
      required: true,
      maxLength: 20,
    },
  },
  {
    key: 'userGroupDescription',
    type: 'textarea',
    props: {
      label: 'Descripción',
      required: true,
      maxLength: 50,
      rows: 5,
    },
  },
];
