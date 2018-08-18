import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UiGalleryModule } from '../ui/ui-gallery/ui-gallery.module';
import { UiSearchItemsModule } from '../ui/ui-search-items/ui-search-items.module';
import { UiSpinnerModule } from '../ui/ui-spinner/ui-spinner.module';

import { BookmarksRoutes } from './bookmarks.routing';

import { BookmarksComponent } from './src/bookmarks.component';

import { BookmarkBlService } from './shared/bookmark-bl.service';
import { BookmarkProxyService } from './shared/bookmark-proxy.service';


@NgModule({
  imports: [
    CommonModule,
    UiGalleryModule,
    UiSearchItemsModule,
    UiSpinnerModule,
    RouterModule.forChild(BookmarksRoutes)

  ],
  declarations: [
    BookmarksComponent],
  providers: [
    BookmarkBlService,
    BookmarkProxyService]
})
export class BookmarksModule { }

