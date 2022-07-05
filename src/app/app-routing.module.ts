import { BlogHomeComponent } from './blog-app/blog-home.component';
import { NoteComponent } from './notes-app/components/note/note.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo-app/todo.component';
import { HomeComponent } from './home-component/home.component';

const routes: Routes = [
  {
    path: '',
    data: {title: 'Angular Practice Apps'},
    component: HomeComponent
  },
  { 
    path : 'todo-app', 
    data: {title : 'Todo App'},
    component : TodoComponent 
  },
  { 
    path : 'notes-app', 
    data: {title : 'Notes App'},
    component : NoteComponent 
  },
  { 
    path : 'blog-app', 
    data: {title : 'Blogs App'},
    component : BlogHomeComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TodoComponent]
