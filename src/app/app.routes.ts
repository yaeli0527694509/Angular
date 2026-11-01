import { Routes } from '@angular/router';
import { Marks } from './marks/marks';
import { ParentLesson4 } from './parent-lesson4/parent-lesson4'; // Added import for ParentLesson4 component - to run it in the browser.

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'parent-lesson4' },
  { path: 'marks', component: Marks },
  { path: 'parent-lesson4', component: ParentLesson4 }, // Added route for ParentLesson4 component - to run it in the browser.
];
