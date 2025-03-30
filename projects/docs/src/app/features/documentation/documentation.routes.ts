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
    path: 'badge',
    loadComponent: () =>
      import('./pages/badge-documentation/badge-documentation.component'),
    data: {
      title: 'Badge',
      new: true,
    },
  },
  {
    path: 'checkbox',
    loadComponent: () =>
      import('./pages/checkbox-documentation/checkbox-documentation.component'),
    data: {
      title: 'Checkbox',
    },
  },
  {
    path: 'textarea',
    loadComponent: () =>
      import('./pages/textarea-documentation/textarea-documentation.component'),
    data: {
      title: 'Textarea',
    },
  },
  {
    path: 'vertical-nav',
    loadComponent: () =>
      import(
        './pages/vertical-nav-documentation/vertical-nav-documentation.component'
      ),
    data: {
      title: 'Vertical Navigation',
      new: true,
    },
  },
  {
    path: 'tooltip',
    loadComponent: () =>
      import('./pages/tooltip-documentation/tooltip-documentation.component'),
    data: {
      title: 'Tooltip',
      new: true,
    },
  },
  {
    path: '**',
    redirectTo: '',
  },
];
