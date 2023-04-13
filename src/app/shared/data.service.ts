import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[] = [
    new Todo('this is a test!', false),
    new Todo('Alternatively, the current configuration can be loaded as a static font instead of a variable one', true)
  ];

  constructor() { }

  getAllTodos() {
    return this.todos
  }

  addTodo(todo:Todo) {
    this.todos.push(todo)
  }

  updateTodo(index: number, updatedTodo : Todo) {
    this.todos[index] = updatedTodo
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1)
  }
}
