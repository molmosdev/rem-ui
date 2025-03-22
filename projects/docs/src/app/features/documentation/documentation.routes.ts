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
    path: '**',
    redirectTo: '',
  },
];
