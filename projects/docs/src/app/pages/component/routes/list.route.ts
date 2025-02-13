import { Route } from '@angular/router';
import { signal } from '@angular/core';
import { List } from '../../../../../../lib/src/public-api';

export const listRoute: Route = {
  path: 'list',
  loadComponent: () => import('../component.component'),
  data: {
    title: 'List',
    component: List,
    inputs: [
      {
        key: 'data',
        name: 'Data',
        type: 'list',
        value: signal([
          {
            Identification: { value: 23452, type: 'number' },
            Name: { value: 'John', type: 'string' },
          },
          {
            Identification: { value: 34676, type: 'number' },
            Name: { value: 'Jane', type: 'string' },
          },
          {
            Identification: { value: 98643, type: 'number' },
            Name: { value: 'Doe', type: 'string' },
          },
        ]),
      },
    ],
  },
};
