import { Routes } from '@angular/router';

export const playgroundRoutes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'button',
    loadComponent: () =>
      import('./pages/button-playground/button-playground.component'),
    data: {
      title: 'Button',
    },
  },
  {
    path: 'text',
    loadComponent: () =>
      import('./pages/text-playground/text-playground.component'),
    data: {
      title: 'Text',
    },
  },
  {
    path: 'number',
    loadComponent: () =>
      import('./pages/number-playground/number-playground.component'),
    data: {
      title: 'Number',
    },
  },
  {
    path: 'password',
    loadComponent: () =>
      import('./pages/password-playground/password-playground.component'),
    data: {
      title: 'Password',
    },
  },
  {
    path: 'spinner',
    loadComponent: () =>
      import('./pages/spinner-playground/spinner-playground.component'),
    data: {
      title: 'Spinner',
    },
  },
  {
    path: 'switch',
    loadComponent: () =>
      import('./pages/switch-playground/switch-playground.component'),
    data: {
      title: 'Switch',
    },
  },
  {
    path: 'textarea',
    loadComponent: () =>
      import('./pages/textarea-playground/textarea-playground.component'),
    data: {
      title: 'Textarea',
    },
  },
  {
    path: 'select',
    loadComponent: () =>
      import('./pages/select-playground/select-playground.component'),
    data: {
      title: 'Select',
    },
  },
  {
    path: 'search',
    loadComponent: () =>
      import('./pages/search-playground/search-playground.component'),
    data: {
      title: 'Search',
    },
  },
  {
    path: 'tabs',
    loadComponent: () =>
      import('./pages/tabs-playground/tabs-playground.component'),
    data: {
      title: 'Tabs',
    },
  },
  {
    path: '**',
    redirectTo: '',
  },
];
