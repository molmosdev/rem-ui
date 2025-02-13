import { Route } from '@angular/router';
import { signal } from '@angular/core';
import { Textarea } from '../../../../../../lib/src/public-api';

export const textareaRoute: Route = {
  path: 'textarea',
  loadComponent: () => import('../component.component'),
  data: {
    title: 'Textarea',
    component: Textarea,
    inputs: [
      {
        key: 'label',
        name: 'Label',
        type: 'text',
        value: signal('Observations'),
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
        value: signal('Lorem ipsum...'),
        hidden: true,
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
