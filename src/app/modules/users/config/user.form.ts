import { FormlyFieldConfig } from '@ngx-formly/core';

export const userFields: FormlyFieldConfig[] = [
  {
    key: 'name',
    type: 'input',
    props: {
      label: 'Nombre',
      required: true,
    },
  },
  {
    key: 'lastName',
    type: 'input',
    props: {
      label: 'Apellido',
      required: true,
    },
  },
  {
    key: 'login',
    type: 'input',
    props: {
      label: 'Login',
      required: true,
    },
  },
  {
    key: 'password',
    type: 'input',
    props: {
      label: 'Contraseña',
      required: true,
    },
  },
  {
    key: 'group',
    type: 'select',
    templateOptions: {
      label: 'Grupo',
      required: true,
      options: [
        {
          value: 'sales',
          label: 'Ventas',
        },
        {
          value: 'marketing',
          label: 'Marketing',
        },
        {
          value: 'development',
          label: 'Desarrollo',
        },
        {
          value: 'admon',
          label: 'Administradores',
        },
      ],
    },
  },
  {
    key: 'role',
    type: 'select',
    templateOptions: {
      label: 'Rol',
      required: true,
      options: [
        {
          value: 'admin',
          label: 'Administrador',
        },
        {
          value: 'editor',
          label: 'Editor',
        },
        {
          value: 'user',
          label: 'Usuario',
        },
        {
          value: 'guest',
          label: 'Invitado',
        },
      ],
    },
  },
];
