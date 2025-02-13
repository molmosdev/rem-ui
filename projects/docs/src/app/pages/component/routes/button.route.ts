import { Route } from '@angular/router';
import { signal } from '@angular/core';
import { Button } from '../../../../../../lib/src/public-api';

export const buttonRoute: Route = {
  path: 'button',
  loadComponent: () =>
    import('../pages/dynamic-playground/dynamic-playground.component'),
  data: {
    title: 'Button',
    component: Button,
    inputs: [
      {
        key: 'type',
        name: 'Type',
        type: 'select',
        value: signal('primary'),
        options: [
          { label: 'Primary', value: 'primary' },
          { label: 'Secondary', value: 'secondary' },
          { label: 'Ghost', value: 'ghost' },
        ],
      },
      {
        key: 'disabled',
        name: 'Disabled',
        type: 'switch',
        value: signal(false),
      },
      {
        key: 'loading',
        name: 'Loading',
        type: 'switch',
        value: signal(false),
      },
    ],
    ngContent: signal('This is a button'),
  },
};
