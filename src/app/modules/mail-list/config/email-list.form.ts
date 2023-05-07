import { FormlyFieldConfig } from "@ngx-formly/core";

export const emailsFields: FormlyFieldConfig[] = [
  {
    key: 'mailListName',
    type: 'input',
    props: {
      label: 'Lista de correos',
      required: true,
      maxLength: 50
    },
  },
  {
    key: 'mailListAddresses',
    type: 'chips',
    props: {
      label: 'Correos (Presiona "enter" despues de cada correo)',
      required: true,
      maxLength: 1024,
    },
  },
];
