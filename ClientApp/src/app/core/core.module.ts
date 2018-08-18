import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiRepositoryActionService } from '../ui/ui-repository/shared/ui-repository-action.service'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    UiRepositoryActionService
  ]
})
export class CoreModule { }
