import { Route } from '@angular/router';
import { signal } from '@angular/core';
import { Text } from '../../../../../../lib/src/public-api';

export const textRoute: Route = {
  path: 'text',
  loadComponent: () =>
    import('../pages/dynamic-playground/dynamic-playground.component'),
  data: {
    title: 'Text',
    component: Text,
    inputs: [
      {
        key: 'label',
        name: 'Label',
        type: 'text',
        value: signal('Name'),
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
        value: signal('Lorem ipsum'),
        hidden: true,
      },
      {
        key: 'error',
        name: 'Error',
        type: 'switch',
        value: signal(false),
      },
      {
        key: 'clearable',
        name: 'Clearable',
        type: 'switch',
        value: signal(false),
      },
      {
        key: 'disabled',
        name: 'Disabled',
        type: 'switch',
        value: signal(false),
      },
      {
        key: 'searching',
        name: 'Searching',
        type: 'switch',
        value: signal(false),
      },
    ],
  },
};
