import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { TherapiesComponent } from './pages/therapies/therapies.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'therapies',
    component: TherapiesComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'resources',
    component: HomeComponent,
  },
];
