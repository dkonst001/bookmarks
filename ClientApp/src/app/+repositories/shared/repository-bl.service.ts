import { Injectable } from '@angular/core';

import { RepositoryProxyService } from './repository-proxy.service';

@Injectable()
export class RepositoryBlService {
  // Repository business logic
  repositories: Repository[];
  result: any;
  isSearching = false;

  constructor(private repositoryProxyService: RepositoryProxyService) { }

  searchRepositories(searchKeyword: string) {
    this.isSearching = true;
    this.repositoryProxyService.searchtRepositories(searchKeyword).subscribe(result => {
      this.result = result;
      // To keep the app indifferent to possible future github changes,
      // only the nessassary attributes are kept structured by Repository interface.
      this.repositories = this.result.items.map( item =>
        <Repository>{
        id: item.id,
        name: item.name,
        avatar_url: item.owner.avatar_url,
        isBookmarked: false
      });
      this.isSearching = false;
    }, error => console.error(error));

  }

  bookmarkRepository(id: number): any {

    const item = this.getItem(id);

    this.repositoryProxyService.bookmarkRepository(item).subscribe(result => {
      const reoository = this.repositories.find( r => r.id === result)
      reoository.isBookmarked = true;
    }, error => console.error(error));
  }

  bookmarkReset(id: number): any {
    const repository = this.getRepository(id);
    repository.isBookmarked = false;
  }

  getItem(id: number): any {
    const item = this.result.items.find(i => i.id === id)
    return item;
  }

  getRepository(id: number): Repository {
    const repository = this.repositories.find(i => i.id === id)
    return repository;
  }

}
