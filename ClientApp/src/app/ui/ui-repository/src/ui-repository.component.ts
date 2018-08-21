import { Component, OnInit, Input } from '@angular/core';

import { UiRepositoryActionService } from '../shared/ui-repository-action.service';

@Component({
  selector: 'app-ui-repository',
  template: `
          <div class="col-md-{{colWidth}} panel" *ngIf = "repository">
            <div>
              <h4>{{ repository.name }}</h4>
              <img src="{{repository.avatar_url}}" alt="Avatar doesn't exist for this repository owner" class="img-circle img-thumbnail" />
              <button type="button"
                (click)="action()"
                title = "{{actionName}}"
                [disabled] = "repository.isBookmarked"
                class="btn btn-primary">
                <i class="fa fa-{{actionName}}"></i> <span>{{ actionName }}</span>
              </button>
            </div>
          </div>

  `,
  styleUrls: ['./ui-repository.component.css']
})
export class UiRepositoryComponent implements OnInit {

@Input() repository: Repository;
@Input() actionName: string;
@Input() colWidth = 3;

  constructor(private uiRepositoryActionService: UiRepositoryActionService) { }

  ngOnInit() {
    // console.log('repository', this.repository)
  }

  action() {

    this.uiRepositoryActionService.sendAction(this.repository.id, this.actionName);

  }

}
