import { Route } from '@angular/router';
import { signal } from '@angular/core';
import { Spinner } from '../../../../../../lib/src/public-api';

export const spinnerRoute: Route = {
  path: 'spinner',
  loadComponent: () =>
    import('../pages/dynamic-playground/dynamic-playground.component'),
  data: {
    title: 'Spinner',
    component: Spinner,
    inputs: [
      {
        key: 'active',
        name: 'Active',
        type: 'switch',
        value: signal(true),
      },
      {
        key: 'size',
        name: 'Size',
        type: 'number',
        value: signal(35),
      },
    ],
  },
};
