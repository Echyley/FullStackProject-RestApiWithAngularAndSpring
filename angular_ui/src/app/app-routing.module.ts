import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CrudScreenComponent } from './components/crud-screen/crud-screen.component';
import { BookShelfComponent } from './components/book-shelf/book-shelf.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Register', component: CrudScreenComponent },
  { path: 'BookShelf', component: BookShelfComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
