import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { TherapiesComponent } from './pages/therapies/therapies.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { TherapyDetailComponent } from './pages/therapy-detail/therapy-detail.component';
import { ResourceDetailComponent } from './pages/resource-detail/resource-detail.component';

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
    path: 'therapies/:id',
    component: TherapyDetailComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'blog/:id',
    component: BlogDetailComponent,
  },
  {
    path: 'resources',
    component: ResourcesComponent,
  },
  {
    path: 'resources/:id',
    component: ResourceDetailComponent,
  },
  { path: ':slug', component: BlogDetailComponent }, 
];
