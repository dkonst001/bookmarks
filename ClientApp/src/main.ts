import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

export function getBaseUrl() {
  const baseUrl = document.getElementsByTagName('base')[0].href;
  return baseUrl;
}

export function getGithubUrl() {
  const gitHubUrl = 'https://api.github.com/search/repositories';
  return gitHubUrl;
}

const providers = [
  { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] },
  { provide: 'GITHUB_URL', useFactory: getGithubUrl, deps: [] }
];

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.log(err));
