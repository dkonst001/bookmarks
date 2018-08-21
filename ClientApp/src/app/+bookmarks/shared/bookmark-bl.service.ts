import { Injectable } from '@angular/core';

import { BookmarkProxyService } from './bookmark-proxy.service';
import { UiRepositoryActionService } from '../../ui/ui-repository/shared/ui-repository-action.service';

@Injectable()
export class BookmarkBlService {

  bookmarks: Repository[];
  result: any;
  isSearching = false;

  constructor(private bookmarkProxyService: BookmarkProxyService,
              private uiRepositoryActionService: UiRepositoryActionService) { }

  get() {
    console.log('get bookmarks callled')
    this.isSearching = true;
    this.bookmarkProxyService.get().subscribe(result => {
      this.setBookmarks(result);
    }, error => console.error(error));

  }

  unBookmarkRepository(id: number): any {

    this.bookmarkProxyService.delete(id).subscribe(result => {
      this.setBookmarks(result);
      this.uiRepositoryActionService.sendAction(id, 'reset');
    }, error => console.error(error));
  }

  setBookmarks(result: any) {
    console.log('result', result ? result : ' is empty');
    if (result) {
      this.result = result;
      this.bookmarks = this.result.map( item =>
        <Repository>{
        id: item.item.id,
        name: item.item.name,
        avatar_url: item.item.owner.avatar_url,
        isBookmarked: false
      });
    }
    this.isSearching = false;
    console.log('bookmarks', this.bookmarks ? this.bookmarks : ' is empty');
  }

  // getItem(id: number): any {
  //   const item = this.result.find(i => i.id === id)
  //   return item;
  // }

}

