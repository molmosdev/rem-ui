import { Routes } from '@angular/router';
import { playgroundRoutes } from './pages/playground/playground.routes';

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
    path: 'playground',
    children: playgroundRoutes,
    data: {
      title: 'Playground',
      type: 'section',
    },
  },
  {
    path: '**',
    redirectTo: '',
  },
];
