import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuModule } from './nav-menu/nav-menu.module';
import { RouterModule } from '@angular/router';


import { MainLayoutComponent } from './src/main-layout.component';

@NgModule({
  imports: [
    CommonModule,
    NavMenuModule,
    RouterModule

  ],
  declarations: [MainLayoutComponent],
  exports: [MainLayoutComponent],
})
export class MainLayoutModule { }
