import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { UiSearchItemsComponent } from './src/ui-search-items.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UiSearchItemsComponent
  ],
  exports: [
    UiSearchItemsComponent
  ]
})
export class UiSearchItemsModule { }
