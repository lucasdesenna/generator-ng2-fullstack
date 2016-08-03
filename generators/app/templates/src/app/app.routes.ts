import { provideRouter, RouterConfig }  from '@angular/router';
import { MainComponent } from './+main/main.component';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: `/main`,
    pathMatch: 'full'
  },
  {
    path: `main`,
    component: MainComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
