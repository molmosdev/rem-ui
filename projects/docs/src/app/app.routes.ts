import { Routes } from '@angular/router';
import { componentRoutes } from './pages/component/component.routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'introduction',
    pathMatch: 'full',
  },
  {
    path: 'introduction',
    loadComponent: () => import('./pages/introduction/introduction.component'),
    data: {
      title: 'Introduction',
    },
  },
  {
    path: 'component',
    children: componentRoutes,
    data: {
      title: 'Components',
      type: 'section',
    },
  },
  {
    path: '**',
    redirectTo: '',
  },
];
