import { Route } from '@angular/router';
import { signal } from '@angular/core';
import { Switch } from '../../../../../../lib/src/public-api';

export const switchRoute: Route = {
  path: 'switch',
  loadComponent: () => import('../component.component'),
  data: {
    title: 'Switch',
    component: Switch,
    inputs: [
      {
        key: 'label',
        name: 'Label',
        type: 'text',
        value: signal('Notifications'),
      },
      {
        key: 'size',
        name: 'Size',
        type: 'select',
        value: signal('medium'),
        options: [
          { label: 'Default', value: 'default' },
          { label: 'Large', value: 'large' },
        ],
      },
      {
        key: 'value',
        name: 'Value',
        type: 'switch',
        value: signal(false),
      },
    ],
  },
};
