import { Injectable, signal } from '@angular/core';
import { TodoInterface } from '../interface/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoSig = signal<TodoInterface[]>([]);

  addTodo(text: string): void {
    const newTodo: TodoInterface = {
      id: Math.random().toString(16),
      text,
      isCompleted: false,
    };
    this.todoSig.update((todos) => [...todos, newTodo]);
  }

  constructor() {}
}
