import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnknownComponent } from './src/unknown.component';
import { DynamicComponent } from './src/dynamic.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UnknownComponent,
    DynamicComponent
  ],
  exports: [
    UnknownComponent,
    DynamicComponent
  ],
  providers: []
})
export class DynamicModule { }
