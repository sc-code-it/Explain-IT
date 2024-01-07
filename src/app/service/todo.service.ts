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
    this.filterSig.set(filterName)
  }

  addTodo(text: string): void {
    const newTodo: TodoInterface = {
      id: Math.random().toString(16),
      text,
      isCompleted: false,
    };
    this.todoSig.update((todos) => [...todos, newTodo]);
  }
}
