import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material';
import { UiSpinnerComponent } from './src/ui-spinner.component';

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule

  ],
  exports: [UiSpinnerComponent],
  declarations: [UiSpinnerComponent]
})
export class UiSpinnerModule { }
