import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
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

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    // console.log('num of items recived in gallery', this.galleryItems ? this.galleryItems.length : 0 );
    const reminder = this.galleryItems ? this.galleryItems.length % this.itemsInRow : 0;
    const additionalLine = reminder > 0 ? 1 : 0;
    const numOfRows = this.galleryItems ? ((this.galleryItems.length - reminder) / this.itemsInRow) + additionalLine : 0;
    this.rowIndexes = Array.from(Array(numOfRows).keys());
    // console.log('num of rows', this.rowIndexes.length);
    this.colIndexes = Array.from(Array(this.galleryItems ? this.itemsInRow : 0).keys());

  }
  getNextGalleryItem (rowIndex: number, colIndex: number) {

    const index = rowIndex * this.itemsInRow + colIndex;
    return index < this.galleryItems.length ? this.galleryItems[index] : null;

  }

}
