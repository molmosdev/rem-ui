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
    path: 'input',
    loadComponent: () =>
      import('./pages/input-playground/input-playground.component'),
    data: {
      title: 'Input',
    },
  },
  {
    path: 'text-field',
    loadComponent: () =>
      import('./pages/text-field-playground/text-field-playground.component'),
    data: {
      title: 'Text Field',
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
    path: 'vertical-nav',
    loadComponent: () =>
      import(
        './pages/vertical-nav-playground/vertical-nav-playground.component'
      ),
    data: {
      title: 'Vertical Nav',
    },
  },
  {
    path: '**',
    redirectTo: '',
  },
];
