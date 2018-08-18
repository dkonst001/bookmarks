import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiRepositoryModule } from '../ui-repository/ui-repository.module';

import { UiGalleryComponent } from './src/ui-gallery.component';

@NgModule({
  imports: [
    CommonModule,
    UiRepositoryModule
  ],
  declarations: [
    UiGalleryComponent
  ],
  exports: [
    UiGalleryComponent
  ]
})
export class UiGalleryModule { }
