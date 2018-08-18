import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-ui-spinner',
  template: `
      <div class="loading-shade" *ngIf="isWorking">
         <mat-spinner></mat-spinner>
      </div>
  `,
  styles: [`
      .loading-shade {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 56px;
        right: 0;
        background: rgba(0, 0, 0, 0.15);
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
      }
  `]
})
export class UiSpinnerComponent implements OnInit, OnChanges {
  @Input() isWorking: boolean;
  constructor() {
    // console.log('spinner is', this.isWorking)
  }

  ngOnInit() {
    // console.log('ui-spinner init isWorking', this.isWorking)
  }

  ngOnChanges(){
    // console.log('spinner changes isWorking', this.isWorking)
  }


}
