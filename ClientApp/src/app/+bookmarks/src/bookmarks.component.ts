import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { UiRepositoryActionService } from '../../ui/ui-repository/shared/ui-repository-action.service';
import { BookmarkBlService } from '../shared/bookmark-bl.service';

@Component({
  selector: 'app-bookmarks',
  template: `
  <div class="jumbotron">
    <h1>Bookmarked Repositories</h1>
    <app-ui-spinner [isWorking]="bookmarkBlService.isSearching"></app-ui-spinner>

  </div>
  <app-ui-gallery  [galleryItems] = "bookmarkBlService.bookmarks" [action]= "action"></app-ui-gallery>

`
  ,
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {

  subscription: Subscription;
  action = 'UnBookmark';

  constructor(private uiRepositoryActionService: UiRepositoryActionService,
              public bookmarkBlService: BookmarkBlService) {

            }
  ngOnInit() {

    this.bookmarkBlService.get();

    this.subscription = this.uiRepositoryActionService.getAction().subscribe(request => {
      if (request.action === this.action) {
        this.onUnBookmark(request.id)
      }
    });
  }

  onUnBookmark(id: number) {

    this.bookmarkBlService.unBookmarkRepository(id);

  }

}
