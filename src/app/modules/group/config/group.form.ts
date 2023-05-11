import { FormlyFieldConfig } from "@ngx-formly/core";

export const groupFields: FormlyFieldConfig[] = [
  {
    key: 'userGroupName',
    type: 'input',
    props: {
      label: 'group.label.name',
      required: true,
      maxLength: 20,
    },
  },
  {
    key: 'userGroupDescription',
    type: 'textarea',
    props: {
      label: 'group.label.description',
      required: true,
      maxLength: 50,
      rows: 5,
    },
  },
];
