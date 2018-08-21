import { Component, OnInit, OnChanges, Input, Inject } from '@angular/core';


@Component({
  // "Dumb" (UI only) component  that handles genral gallery presentation. The shape of the gallery item is not the concern on the gallery.
  selector: 'app-ui-gallery',
  template: `
    <div class="container" *ngIf= "galleryItems">
        <div class="row stylish-panel" *ngFor = "let rowIndex of rowIndexes">
          <ng-container *ngFor = "let colIndex of colIndexes">
            <app-ui-repository
              [repository] = "getNextGalleryItem (rowIndex, colIndex)"
              [actionName] = "action"
              [colWidth] = "12/itemsInRow">
            </app-ui-repository>
          </ng-container>
        </div>
    </div>
  `,
  styleUrls: ['./ui-gallery.component.css']
})
export class UiGalleryComponent implements OnInit, OnChanges {
  @Input() galleryItems: any[];
  @Input() action: string;
  rowIndexes: number[];
  colIndexes: number[];
  itemsInRow = 4;

  constructor(@Inject('ITEMS_IN_ROW') itemsInRow: number) {

      this.itemsInRow = itemsInRow;
  }

  ngOnInit() {
  }

  ngOnChanges(){
    // set the gallery dimentions. i.e. num of rows accourding to items per row
    const reminder = this.galleryItems ? this.galleryItems.length % this.itemsInRow : 0;
    const additionalLine = reminder > 0 ? 1 : 0;
    const numOfRows = this.galleryItems ? ((this.galleryItems.length - reminder) / this.itemsInRow) + additionalLine : 0;
    // vectors for 2 ngFor directives (rows and columns)
    this.rowIndexes = Array.from(Array(numOfRows).keys());
    this.colIndexes = Array.from(Array(this.galleryItems ? this.itemsInRow : 0).keys());

  }

  getNextGalleryItem (rowIndex: number, colIndex: number) {

    const index = rowIndex * this.itemsInRow + colIndex;
    return index < this.galleryItems.length ? this.galleryItems[index] : null;

  }

}
