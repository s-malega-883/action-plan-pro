import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { NotesComponent } from './MyComponents/notes/notes.component';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './MyComponents/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    NotesComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
