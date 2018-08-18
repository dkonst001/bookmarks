import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { NavMenuComponent } from './src/nav-menu.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

  ],
  declarations: [
    NavMenuComponent
  ],
  exports: [
    NavMenuComponent
  ]
})
export class NavMenuModule { }
