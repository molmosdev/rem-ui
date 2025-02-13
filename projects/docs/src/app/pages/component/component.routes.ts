import { Routes } from '@angular/router';
import { WritableSignal } from '@angular/core';
import {
  buttonRoute,
  textRoute,
  numberRoute,
  switchRoute,
  spinnerRoute,
  textareaRoute,
  passwordRoute,
} from './routes';

export interface IComponentData {
  title: string;
  component: any;
  inputs: {
    key: string;
    name: string;
    type: string;
    value: WritableSignal<any>;
    options?: { label: string; value: string }[];
    hidden?: boolean;
  }[];
  ngContent?: WritableSignal<string>;
}

export const componentRoutes: Routes = [
  {
    path: '',
    redirectTo: '../docs',
    pathMatch: 'full',
  },
  buttonRoute,
  textRoute,
  numberRoute,
  switchRoute,
  spinnerRoute,
  textareaRoute,
  passwordRoute,
  {
    path: 'select',
    loadComponent: () =>
      import('./pages/select-playground/select-playground.component'),
    data: {
      title: 'Select',
    },
  },
  {
    path: '**',
    redirectTo: '../docs',
  },
];
