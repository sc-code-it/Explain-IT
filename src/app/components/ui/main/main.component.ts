import { Component, computed, inject } from '@angular/core';
import { TodoService } from '../../../service/todo.service';
import { FilterEnum } from '../../../interface/filter.enum';
import { TodoComponent } from '../todo/todo.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, TodoComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  todosService = inject(TodoService);
  editingId: string | null = null;

  visibleTodos = computed(() => {
    const todos = this.todosService.todoSig();
    const filter = this.todosService.filterSig();

    if (filter === FilterEnum.active) {
      return todos.filter((todo) => !todo.isCompleted);
    } else if (filter === FilterEnum.completed) {
      return todos.filter((todo) => todo.isCompleted);
    }
    return todos;
  });

  isAllTodosSelected = computed(() =>
    this.todosService.todoSig().every((todo) => todo.isCompleted)
  );

  noTodosClass = computed(() => this.todosService.todoSig().length === 0);

  setEditingId(editingId: string | null): void {
    this.editingId = editingId;
  }

  toggleAllTodos(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.todosService.toggleAll(target.checked);
  }
}
