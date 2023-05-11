import { FormlyFieldConfig } from '@ngx-formly/core';

export const emailsFields: FormlyFieldConfig[] = [
  {
    key: 'mailListName',
    type: 'input',
    props: {
      label: 'email.title',
      required: true,
      maxLength: 50,
    },
  },
  {
    key: 'mailListAddresses',
    type: 'chips',
    props: {
      label: 'email.label.list',
      required: true,
      maxLength: 1024,
    },
  },
];
