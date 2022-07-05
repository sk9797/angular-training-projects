import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  
  todos : Todo[] = [];
  inputTodo : string = ''
  constructor() { }

  ngOnInit(): void {
    this.todos = []
  }

  toggleDone (id:number):void {
    this.todos.map((v, i) => {
      if (i === id) v.completed = !v.completed

      return v
    })
  }

  toggleDelete (id:number):void {
    this.todos = this.todos.filter((v, i) => i !== id );

  }

  addTodo ():void{
    if (this.inputTodo === '') {
      alert('Empty Input')
    }else{
      this.todos.push({
        content: this.inputTodo,
        completed: false
      })
      this.inputTodo = ''
    }
  }

}
