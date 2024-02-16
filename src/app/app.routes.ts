import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./control-flow/if-else.component').then((m) => m.IfElseComponent),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];
