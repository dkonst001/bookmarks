
import { Routes } from '@angular/router';

import { BookmarksComponent } from './src/bookmarks.component';

export const BookmarksRoutes: Routes = [
    {
        path: '',
        component: BookmarksComponent,
        data: { pageTitle: 'Bookmarks' }
    },

];
