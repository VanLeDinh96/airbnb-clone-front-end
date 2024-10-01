import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient, withInterceptors, withXsrfConfiguration} from "@angular/common/http";
import { provideAnimations } from '@angular/platform-browser/animations';
import {authExpired} from "./core/auth/auth-expired.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(), 
    provideHttpClient(
      withInterceptors([authExpired]),
      withXsrfConfiguration(
        {cookieName: "XSRF-TOKEN", headerName: "X-XSRF-TOKEN"}),
    ),
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes)
  ]
};
