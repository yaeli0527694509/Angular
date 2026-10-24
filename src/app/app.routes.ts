import { Routes } from '@angular/router';
import { Marks } from './marks/marks';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'marks' },
  { path: 'marks', component: Marks },
];
