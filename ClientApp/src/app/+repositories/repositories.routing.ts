
import { Routes } from '@angular/router';

import { RepositoriesComponent } from './src/repositories.component';

export const RepositoriesRoutes: Routes = [
    {
        path: '',
        component: RepositoriesComponent,
        data: { pageTitle: 'Repositories' }
    },

];
