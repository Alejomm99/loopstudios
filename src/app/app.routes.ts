import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/screens/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: 'about',
    loadComponent: async () => {
      const { AboutComponent } = await import('./pages/about/about.component');
      return AboutComponent;
    },
  },
  {
    path: 'careers',
    loadComponent: async () => {
      const { CareersComponent } = await import('./pages/careers/careers.component');
      return CareersComponent;
    },
  },
  {
    path: 'events',
    loadComponent: async () => {
      const { EventsComponent } = await import('./pages/events/events.component');
      return EventsComponent;
    },
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'products',
    loadComponent: async () => {
      const { ProductsComponent } = await import('./pages/products/products.component');
      return ProductsComponent;
    },
  },
  {
    path: 'support',
    loadComponent: async () => {
      const { SupportComponent } = await import('./pages/support/support.component');
      return SupportComponent;
    },
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
