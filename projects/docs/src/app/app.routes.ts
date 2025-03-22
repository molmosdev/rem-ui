import { Routes } from '@angular/router';
import { documentationRoutes } from './features/documentation/documentation.routes';

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
    path: 'documentation',
    children: documentationRoutes,
    data: {
      title: 'Documentation',
      type: 'section',
    },
  },
  /*   {
    path: 'playground',
    children: playgroundRoutes,
    data: {
      title: 'Playground',
      type: 'section',
    },
  }, */
  {
    path: '**',
    redirectTo: '',
  },
];
