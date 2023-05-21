import { FormlyFieldConfig } from '@ngx-formly/core';

export const SecurityFields: FormlyFieldConfig[] = [
  {
    key: 'userId',
    type: 'select',
    props: {
      label: 'Usuario',
      options: []
    },
  },
  {
    key: 'windowsIdentityUserName',
    type: 'input',
    props: {
      label: 'Nombre Usuario Windows',
    },
  },
  {
    key: 'windowsIdentityGroupName',
    type: 'input',
    props: {
      label: 'Nombre Grupo Windows',
    },
  },
  {
    key: 'roleId',
    type: 'select',
    props: {
      label: 'Rol',
      options: [
        {
          value: 1,
          label: 'Usuario'
        },
        {
          value: 2,
          label: 'Validador'
        },
        {
          value: 3,
          label: 'Administrador'
        }
      ],
    },
  },
  {
    key: 'securityUserGroupId',
    type: 'select',
    templateOptions: {
      label: 'Nombre Grupo',
      options: [],
    },
  },
  {
    key: 'centralId',
    type: 'select',
    templateOptions: {
      label: 'Sitio',
      options: [],
    },
  },
];
