import { Injectable } from '@angular/core';

import { RepositoryProxyService } from './repository-proxy.service';

@Injectable()
export class RepositoryBlService {

  repositories: Repository[];
  result: any;
  isSearching = false;

  constructor(private repositoryProxyService: RepositoryProxyService) { }

  searchRepositories(searchKeyword: string) {
    this.isSearching = true;
    this.repositoryProxyService.searchtRepositories(searchKeyword).subscribe(result => {
      this.result = result;
      // console.log('result', this.result);
      this.repositories = this.result.items.map( item =>
        <Repository>{
        id: item.id,
        name: item.name,
        avatar_url: item.owner.avatar_url,
        isBookmarked: false
      });
      this.isSearching = false;
      // console.log('repositories', this.repositories);
    }, error => console.error(error));

  }

  bookmarkRepository(id: number): any {

    const item = this.getItem(id);

    this.repositoryProxyService.bookmarkRepository(item).subscribe(result => {

      // console.log('result', this.result);
      const reoository = this.repositories.find( r => r.id === result)
      reoository.isBookmarked = true;
      // console.log('repositories after update', this.repositories);
    }, error => console.error(error));
  }

  getItem(id: number): any {
    const item = this.result.items.find(i => i.id === id)
    return item;
  }

}
