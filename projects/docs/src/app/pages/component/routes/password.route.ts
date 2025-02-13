import { Route } from '@angular/router';
import { signal } from '@angular/core';
import { Password } from '../../../../../../lib/src/public-api';

export const passwordRoute: Route = {
  path: 'password',
  loadComponent: () =>
    import('../pages/dynamic-playground/dynamic-playground.component'),
  data: {
    title: 'Password',
    component: Password,
    inputs: [
      {
        key: 'label',
        name: 'Label',
        type: 'text',
        value: signal('Password'),
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
        value: signal(''),
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
      {
        key: 'showPasswordToggle',
        name: 'Show password toggle',
        type: 'switch',
        value: signal(true),
      },
    ],
  },
};
