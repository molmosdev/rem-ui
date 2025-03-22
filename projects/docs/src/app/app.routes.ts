import { Routes } from '@angular/router';
import { playgroundRoutes } from './features/playground/playground.routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'introduction',
    pathMatch: 'full',
  },
  {
    path: 'introduction',
    loadComponent: () =>
      import('./features/introduction/introduction.component'),
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
