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
    path: 'button-group',
    loadComponent: () =>
      import(
        './pages/button-group-documentation/button-group-documentation.component'
      ),
    data: {
      title: 'Button Group',
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
    path: 'label',
    loadComponent: () =>
      import('./pages/label-documentation/label-documentation.component'),
    data: {
      title: 'Label',
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
