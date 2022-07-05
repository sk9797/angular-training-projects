import { BlogHomeComponent } from './blog-app/blog-home.component';
import { HomeComponent } from './home-component/home.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteComponent } from './notes-app/components/note/note.component';
import { NotesComponent } from './notes-app/notes.component';
import { TodosComponent } from './todo-app/components/todos/todos.component';
import { CustomRadionComponent } from './custom-radio/custom-radion/custom-radion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    routingComponents,
    TodosComponent,
    NotesComponent,
    NoteComponent,
    CustomRadionComponent,
    BlogHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
