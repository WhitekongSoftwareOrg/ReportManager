import { FormlyFieldConfig } from '@ngx-formly/core';

export const SecurityFields: FormlyFieldConfig[] = [
  {
    key: 'name',
    type: 'input',
    props: {
      label: 'Nombre',
      required: true,
    },
  },
  {
    key: 'windowsName',
    type: 'input',
    props: {
      label: 'Apellido',
      required: true,
    },
  },
  {
    key: 'windowsGroup',
    type: 'input',
    props: {
      label: 'Login',
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
  {
    key: 'site',
    type: 'select',
    templateOptions: {
      label: 'Sitio',
      required: true,
      options: [
        {
          value: 'Sitio1',
          label: 'site1',
        },
        {
          value: 'Sitio2',
          label: 'site2',
        },
        {
          value: 'Sitio3',
          label: 'site3',
        },
      ],
    },
  },
];
