import {Routes, RouterModule} from '@angular/router';
import {MainLayoutComponent} from './main-layout/src/main-layout.component';

import {ModuleWithProviders} from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    data: {pageTitle: 'Isracard'},
    children: [
      {path: '', redirectTo: 'repositories', pathMatch: 'full',},
      {path: 'repositories', loadChildren: 'app/+repositories/repositories.module#RepositoriesModule', data: {pageTitle: 'Repositories'}},
      {path: 'bookmarks', loadChildren: 'app/+bookmarks/bookmarks.module#BookmarksModule', data: {pageTitle: 'Bookmarks'}},
    ]
  },

  {path: '**', redirectTo: 'repositories'}
//
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
