import { Routes } from '@angular/router';

export const docsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./docs.component'),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
