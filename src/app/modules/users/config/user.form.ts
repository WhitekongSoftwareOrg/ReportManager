import { FormlyFieldConfig } from '@ngx-formly/core';

export const userFields: FormlyFieldConfig[] = [
  {
    key: 'userName',
    type: 'input',
    props: {
      label: 'users.label.name',
      required: true,
      maxLength: 20,
    },
  },
  {
    key: 'userLastName',
    type: 'input',
    props: {
      label: 'users.label.lastname',
      required: true,
      maxLength: 20,
    },
  },
  {
    key: 'userLogin',
    type: 'input',
    props: {
      label: 'users.label.login',
      required: true,
      maxLength: 20,
    },
  },
  {
    key: 'userPass',
    type: 'input',
    props: {
      type: 'password',
      label: 'users.label.password',
      required: true,
      maxLength: 20,
    },
  },
  {
    key: 'userGroupId',
    type: 'select',
    templateOptions: {
      label: 'users.label.group',
      required: true,
      options: [],
    },
  },
  {
    key: 'userRol',
    type: 'select',
    templateOptions: {
      label: 'users.label.rol',
      required: true,
      options: [
        {
          value: 'Admin',
          label: 'users.label.admin',
        },
        {
          value: 'User',
          label: 'users.label.user',
        },
      ],
    },
  },
];
