import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

const providers = [
  { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] },
  { provide: 'GITHUB_URL', useFactory: getGithubUrl, deps: [] },
  { provide: 'ITEMS_IN_ROW', useFactory: getItemsInRow, deps: [] }
];

if (environment.production) {
  enableProdMode();
}

export function getBaseUrl() {
  const baseUrl = document.getElementsByTagName('base')[0].href + 'api/Bookmarks';
  return baseUrl;
}

export function getGithubUrl() {
  const gitHubUrl = 'https://api.github.com/search/repositories';
  return gitHubUrl;
}

export function getItemsInRow() {
  const itemsInRow = 6;
  return itemsInRow;
}

platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.log(err));
