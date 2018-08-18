import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ui-search-items',
  template:`
      <div class="row" style="padding: 8px 12px">
        <div class="col-md-3">
          <label class="input"> <i class="icon-append fa fa-user"></i>
          <input
            type = "text"
            (keyup)="onKey($event)"
            placeholder="Type {{itemsName}} keyword"
            attr.aria-label="Search {{itemsName}}">
          </label>
        </div>
      </div>
        <div class="row" style="padding: 8px 12px">
          <div class="col-md-3">
          <button type="button"
            (click)="submit()"
            title="search"
            class="pull-left btn btn-primary"
            [disabled] = "!searchValue">
            <i class="fa fa-search"></i> <span>Search</span>
          </button>
        </div>
      </div>
  `,
  styleUrls: ['./ui-search-items.component.css']
})
export class UiSearchItemsComponent implements OnInit {

  @Input() itemsName: string;
  @Output() doSubmit = new EventEmitter<string>();

  searchValue = '';


  constructor() { }

  ngOnInit() {
  }


  onKey(event: any) { // without type info
    this.searchValue = event.target.value;
  }

  submit(){
    this.doSubmit.emit(this.searchValue);
    // console.log('search keyword', this.searchValue )

  }

}
