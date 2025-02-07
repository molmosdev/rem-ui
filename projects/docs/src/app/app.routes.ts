import { Routes } from '@angular/router';
import { docsRoutes } from './pages/docs/docs.routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'docs',
    pathMatch: 'full',
  },
  {
    path: 'docs',
    children: docsRoutes,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
