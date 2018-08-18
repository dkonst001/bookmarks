import { Injectable } from '@angular/core';

import { BookmarkProxyService } from './bookmark-proxy.service';

@Injectable()
export class BookmarkBlService {

  bookmarks: Repository[];
  result: any;
  isSearching = false;

  constructor(private bookmarkProxyService: BookmarkProxyService) { }

  get() {
    this.isSearching = true;
    this.bookmarkProxyService.get().subscribe(result => {
      this.result = result;
      // console.log('result', this.result);
      this.bookmarks = this.result.map( item =>
        <Repository>{
        id: item.item.id,
        name: item.item.name,
        avatar_url: item.item.owner.avatar_url,
        isBookmarked: false
      });
      this.isSearching = false;
      // console.log('bookmarks', this.bookmarks);
    }, error => console.error(error));

  }

  unBookmarkRepository(id: number): any {

    const item = this.getItem(id);

    this.bookmarkProxyService.unBookmarkRepository(item).subscribe(result => {

      // console.log('result', this.result);
      const bookmark = this.bookmarks.find( r => r.id === result)
      bookmark.isBookmarked = true;
      // console.log('bookmarks after update', this.bookmarks);
    }, error => console.error(error));
  }

  getItem(id: number): any {
    const item = this.result.find(i => i.id === id)
    return item;
  }

}

