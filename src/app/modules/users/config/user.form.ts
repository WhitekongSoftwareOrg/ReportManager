import { FormlyFieldConfig } from '@ngx-formly/core';

export const userFields: FormlyFieldConfig[] = [
  {
    key: 'userName',
    type: 'input',
    props: {
      label: 'Nombre',
      required: true,
      maxLength: 20,
    },
  },
  {
    key: 'userLastName',
    type: 'input',
    props: {
      label: 'Apellido',
      required: true,
      maxLength: 20,
    },
  },
  {
    key: 'userLogin',
    type: 'input',
    props: {
      label: 'Login',
      required: true,
      maxLength: 20,
    },
  },
  {
    key: 'userPass',
    type: 'input',
    props: {
      type: 'password',
      label: 'Contraseña',
      required: true,
      maxLength: 20,
    },
  },
  {
    key: 'userGroupId',
    type: 'select',
    templateOptions: {
      label: 'Grupo',
      required: true,
      options: [],
    },
  },
  {
    key: 'userRol',
    type: 'select',
    templateOptions: {
      label: 'Rol',
      required: true,
      options: [
        {
          value: 'Admin',
          label: 'Administrador',
        },
        {
          value: 'User',
          label: 'Usuario',
        },
      ],
    },
  },
];
