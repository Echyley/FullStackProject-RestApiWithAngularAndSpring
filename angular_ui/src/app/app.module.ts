import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CrudScreenComponent } from './components/crud-screen/crud-screen.component';
import { BookShelfComponent } from './components/book-shelf/book-shelf.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CrudScreenComponent,
    BookShelfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
