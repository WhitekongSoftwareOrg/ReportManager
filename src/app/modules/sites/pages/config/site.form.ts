import { FormlyFieldConfig } from "@ngx-formly/core";

export const siteFields: FormlyFieldConfig[] = [
  {
    key: 'centralCode',
    type: 'input',
    props: {
      label: 'sites.label.centralCode',
      required: true,
      maxLength: 5,
    },
  },
  {
    key: 'centralCity',
    type: 'input',
    props: {
      label: 'sites.label.city',
      required: true,
      maxLength: 50,
    },
  },
  {
    key: 'centralRegion',
    type: 'input',
    props: {
      label: 'sites.label.region',
      required: true,
      maxLength: 50,
    },
  },
  {
    key: 'centralDescription',
    type: 'textarea',
    props: {
      label: 'sites.label.description',
      required: true,
      maxLength: 50,
    },
  },
  {
    key: 'centralCountry',
    type: 'input',
    props: {
      label: 'sites.label.country',
      required: true,
      maxLength: 50,
    },
  },
];
