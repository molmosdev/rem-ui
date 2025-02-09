import { Routes } from '@angular/router';

export const componentRoutes: Routes = [
  {
    path: '',
    redirectTo: '../docs',
    pathMatch: 'full',
  },
  {
    path: 'button',
    loadComponent: () =>
      import('./pages/button-details/button-details.component'),
    data: {
      title: 'Button',
    },
  },
  {
    path: 'switch',
    loadComponent: () =>
      import('./pages/switch-details/switch-details.component'),
    data: {
      title: 'Switch',
    },
  },
  {
    path: 'spinner',
    loadComponent: () =>
      import('./pages/spinner-details/spinner-details.component'),
    data: {
      title: 'Spinner',
    },
  },
  {
    path: '**',
    redirectTo: '../docs',
  },
];
