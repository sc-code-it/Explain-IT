import { Injectable, signal } from '@angular/core';
import { TodoInterface } from '../interface/todo';
import { FilterEnum } from '../interface/filter.enum';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoSig = signal<TodoInterface[]>([]);
  filterSig = signal<FilterEnum>(FilterEnum.all);

  changeFilter(filterName: FilterEnum): void {
    this.filterSig.set(filterName);
  }

  addTodo(text: string): void {
    const newTodo: TodoInterface = {
      id: Math.random().toString(16),
      text,
      isCompleted: false,
    };
    this.todoSig.update((todos) => [...todos, newTodo]);
  }

  changeTodo(id: string, text: string): void {
    this.todoSig.update((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
  }

  removeTodo(id: string): void {
    this.todoSig.update((todos) => todos.filter((todo) => todo.id !== id));
  }

  toggleTodo(id: string): void {
    this.todoSig.update((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }

  toggleAll(isCompleted: boolean): void {
    this.todoSig.update((todos) =>
      todos.map((todo) => ({ ...todo, isCompleted }))
    );
  }
}
