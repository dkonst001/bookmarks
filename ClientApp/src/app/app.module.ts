import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

// import { BookmarksModule } from './+bookmarks/bookmarks.module';
// import { RepositoriesModule } from './+repositories/repositories.module';
import { MainLayoutModule } from './main-layout/main-layout.module';

import { routing } from './app.routing'

// Core providers
import {CoreModule} from './core/core.module';
// import { NavMenuComponent } from './main-layout/nav-menu/src/nav-menu.component';
// import { HomeComponent } from './home/home.component';
// import { CounterComponent } from './counter/counter.component';
// import { FetchDataComponent } from './fetch-data/fetch-data.component';

@NgModule({
  declarations: [
    AppComponent,
    // NavMenuComponent,
    // HomeComponent,
    // CounterComponent,
    // FetchDataComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    // BookmarksModule,
    // RepositoriesModule,
    MainLayoutModule,
    routing,
    CoreModule
    // RouterModule.forRoot([
    //   { path: '', component: HomeComponent, pathMatch: 'full' },
    //   { path: 'counter', component: CounterComponent },
    //   { path: 'fetch-data', component: FetchDataComponent },
    // ])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
