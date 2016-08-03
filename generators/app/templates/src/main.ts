import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent } from './app/app.component';
import { appRouterProviders } from './app/app.routes';

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  appRouterProviders
]);
