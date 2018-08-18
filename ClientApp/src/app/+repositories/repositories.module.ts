import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UiGalleryModule } from '../ui/ui-gallery/ui-gallery.module';
import { UiSearchItemsModule } from '../ui/ui-search-items/ui-search-items.module';
import { UiSpinnerModule } from '../ui/ui-spinner/ui-spinner.module';


import { RepositoriesRoutes } from './repositories.routing';

import { RepositoriesComponent } from './src/repositories.component';

import { RepositoryBlService } from './shared/repository-bl.service';
import { RepositoryProxyService } from './shared/repository-proxy.service';


@NgModule({
  imports: [
    CommonModule,
    UiGalleryModule,
    UiSearchItemsModule,
    UiSpinnerModule,
    RouterModule.forChild(RepositoriesRoutes)

  ],
  declarations: [
    RepositoriesComponent],
  providers: [
    RepositoryBlService,
    RepositoryProxyService]
})
export class RepositoriesModule { }
