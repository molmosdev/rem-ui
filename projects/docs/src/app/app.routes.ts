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
    path: 'theming',
    loadComponent: () => import('./features/theming/theming.component'),
    data: {
      title: 'Theming',
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
  {
    path: '**',
    redirectTo: '',
  },
];
