import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {FormControl} from '@angular/forms';
import {TodoService} from './todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [];

  content = new FormControl();

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todoService.getTodos().subscribe(next => {
      this.todos = next;
    }, error => {
      console.log(error);
    }, () => {
      console.log('complete');
    });
  }

  toggleTodo(i) {
    const todo = this.todos[i];
    const todoData = {
      ...todo,
      completed: !todo.completed
    };
    this.todoService.updateTodo(todoData).subscribe(next => {
      this.todos[i].completed = next.completed;
    });
  }

  addTodo() {
    const todo: Partial<Todo> = {
      title: this.content.value,
      completed: false
    };
    this.todoService.createTodo(todo).subscribe(next => {
      this.todos.unshift(next);
      this.content.setValue('');
    });
  }

  deleteTodo(i) {
    const todo = this.todos[i];
    this.todoService.deleteTodo(todo.id).subscribe(() => {
      this.todos = this.todos.filter(t => t.id !== todo.id);
    });
  }
}
