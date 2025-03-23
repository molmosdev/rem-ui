import { Routes } from '@angular/router';

export const documentationRoutes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'button',
    loadComponent: () =>
      import('./pages/button-documentation/button-documentation.component'),
    data: {
      title: 'Button',
    },
  },
  {
    path: 'input',
    loadComponent: () =>
      import('./pages/input-documentation/input-documentation.component'),
    data: {
      title: 'Input',
    },
  },
  {
    path: 'select',
    loadComponent: () =>
      import('./pages/select-documentation/select-documentation.component'),
    data: {
      title: 'Select',
    },
  },
  {
    path: 'switch',
    loadComponent: () =>
      import('./pages/switch-documentation/switch-documentation.component'),
    data: {
      title: 'Switch',
    },
  },
  {
    path: '**',
    redirectTo: '',
  },
];
