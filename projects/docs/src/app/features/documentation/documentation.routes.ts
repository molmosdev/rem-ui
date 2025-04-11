import { Routes } from '@angular/router';

export const documentationRoutes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'button',
    loadComponent: () => import('./pages/button-documentation.component'),
    data: {
      title: 'Button',
    },
  },
  {
    path: 'input',
    loadComponent: () => import('./pages/input-documentation.component'),
    data: {
      title: 'Input',
    },
  },
  {
    path: 'select',
    loadComponent: () => import('./pages/select-documentation.component'),
    data: {
      title: 'Select',
    },
  },
  {
    path: 'switch',
    loadComponent: () => import('./pages/switch-documentation.component'),
    data: {
      title: 'Switch',
    },
  },
  {
    path: 'badge',
    loadComponent: () => import('./pages/badge-documentation.component'),
    data: {
      title: 'Badge',
      new: true,
    },
  },
  {
    path: 'checkbox',
    loadComponent: () => import('./pages/checkbox-documentation.component'),
    data: {
      title: 'Checkbox',
    },
  },
  {
    path: 'textarea',
    loadComponent: () => import('./pages/textarea-documentation.component'),
    data: {
      title: 'Textarea',
    },
  },
  {
    path: 'vertical-nav',
    loadComponent: () => import('./pages/vertical-nav-documentation.component'),
    data: {
      title: 'Vertical Navigation',
      new: true,
    },
  },
  {
    path: 'tooltip',
    loadComponent: () => import('./pages/tooltip-documentation.component'),
    data: {
      title: 'Tooltip',
      new: true,
    },
  },
  {
    path: 'bottom-sheet',
    loadComponent: () => import('./pages/bottom-sheet-documentation.component'),
    data: {
      title: 'Bottom Sheet',
      new: true,
    },
  },
  {
    path: 'side-sheet',
    loadComponent: () => import('./pages/side-sheet-documentation.component'),
    data: {
      title: 'Side Sheet',
      new: true,
    },
  },
  {
    path: 'color-picker',
    loadComponent: () => import('./pages/color-picker-documentation.component'),
    data: {
      title: 'Color Picker',
      new: true,
    },
  },
  {
    path: 'input-group',
    loadComponent: () => import('./pages/input-group-documentation.component'),
    data: {
      title: 'Input Group',
      new: true,
    },
  },
  {
    path: 'range',
    loadComponent: () => import('./pages/range-documentation.component'),
    data: {
      title: 'Range',
      new: true,
    },
  },
  {
    path: '**',
    redirectTo: '',
  },
];
