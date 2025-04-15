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
      new: true,
    },
  },
  {
    path: 'components',
    children: documentationRoutes,
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
