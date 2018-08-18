import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { UiRepositoryActionService } from '../../ui/ui-repository/shared/ui-repository-action.service';
import { RepositoryBlService } from '../shared/repository-bl.service';


@Component({
  selector: 'app-repositories',
  template: `
    <div class="jumbotron">
      <h1>Search Repositories</h1>
      <app-ui-spinner [isWorking]="repositoryBlService.isSearching"></app-ui-spinner>

      <app-ui-search-items (doSubmit)= "onRepositories($event)" [itemsName] = "'repository'"></app-ui-search-items>
    </div>
    <app-ui-gallery  [galleryItems] = "repositoryBlService.repositories" [action]= "'Bookmark'"></app-ui-gallery>

  `,
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  subscription: Subscription;

  constructor(private uiRepositoryActionService: UiRepositoryActionService,
              public repositoryBlService: RepositoryBlService) { }

  ngOnInit() {

    this.subscription = this.uiRepositoryActionService.getAction().subscribe(id => this.onBookmark(id));

  }

  onRepositories(searchKeyword: string){

    this.repositoryBlService.searchRepositories(searchKeyword)

  }

  onBookmark(id: number){

    this.repositoryBlService.bookmarkRepository(id);

  }

}
