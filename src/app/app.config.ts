import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {NG_CHARTS_CONFIGURATION, withDefaultRegisterables} from 'ng2-charts';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}), provideRouter(routes),
    {
      provide: NG_CHARTS_CONFIGURATION,
      useFactory: () => {
        return withDefaultRegisterables();
      }
    },
  ]
};
