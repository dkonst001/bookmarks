import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiRepositoryComponent } from './src/ui-repository.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UiRepositoryComponent
  ],
  exports: [
    UiRepositoryComponent
  ]
})
export class UiRepositoryModule { }
