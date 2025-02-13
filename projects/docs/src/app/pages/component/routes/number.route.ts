import { Route } from '@angular/router';
import { signal } from '@angular/core';
import { Number } from '../../../../../../lib/src/public-api';

export const numberRoute: Route = {
  path: 'number',
  loadComponent: () => import('../component.component'),
  data: {
    title: 'Number',
    component: Number,
    inputs: [
      {
        key: 'label',
        name: 'Label',
        type: 'text',
        value: signal('Size'),
      },
      {
        key: 'placeholder',
        name: 'Placeholder',
        type: 'text',
        value: signal(''),
      },
      {
        key: 'value',
        name: 'Value',
        type: 'text',
        value: signal(100),
        hidden: true,
      },
      {
        key: 'valueType',
        name: 'Value Type',
        type: 'select',
        value: signal('integer'),
        options: [
          { label: 'Integer', value: 'integer' },
          { label: 'Decimal', value: 'decimal' },
          { label: 'Currency', value: 'currency' },
          { label: 'Percentage', value: 'percentage' },
        ],
      },
      {
        key: 'suffix',
        name: 'Suffix',
        type: 'text',
        value: signal('cm'),
      },
      {
        key: 'error',
        name: 'Error',
        type: 'switch',
        value: signal(false),
      },
      {
        key: 'disabled',
        name: 'Disabled',
        type: 'switch',
        value: signal(false),
      },
    ],
  },
};
