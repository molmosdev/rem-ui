import { Routes } from '@angular/router';
import { componentRoutes } from './pages/component/component.routes';

export const docsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./docs.component'),
  },
  {
    path: 'component',
    children: componentRoutes,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
