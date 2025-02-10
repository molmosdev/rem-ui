import { Routes } from '@angular/router';
import { Button, Switch, Spinner } from '../../../../../lib/src/public-api';
import { signal, WritableSignal } from '@angular/core';

export interface IComponentData {
  title: string;
  component: any;
  inputs: {
    key: string;
    name: string;
    type: string;
    value: WritableSignal<any>;
    options?: { label: string; value: string }[];
  }[];
  ngContent: WritableSignal<string>;
}

export const componentRoutes: Routes = [
  {
    path: '',
    redirectTo: '../docs',
    pathMatch: 'full',
  },
  {
    path: 'button',
    loadComponent: () => import('./component.component'),
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
            { label: 'Tertiary', value: 'tertiary' },
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
  },
  {
    path: 'switch',
    loadComponent: () => import('./component.component'),
    data: {
      title: 'Switch',
      component: Switch,
      inputs: [
        {
          key: 'label',
          name: 'Label',
          type: 'text',
          value: signal('This is a switch'),
        },
        {
          key: 'value',
          name: 'Value',
          type: 'switch',
          value: signal(false),
        },
      ],
      ngContent: signal(''),
    },
  },
  {
    path: 'spinner',
    loadComponent: () => import('./component.component'),
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
          value: signal(30),
        },
      ],
      ngContent: signal(''),
    },
  },
  {
    path: '**',
    redirectTo: '../docs',
  },
];
