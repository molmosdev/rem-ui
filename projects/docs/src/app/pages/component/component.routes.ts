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
    path: '**',
    redirectTo: '../docs',
  },
];
