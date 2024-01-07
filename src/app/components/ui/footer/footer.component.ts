import { Component, computed, inject } from '@angular/core';
import { TodoService } from '../../../service/todo.service';
import { FilterEnum } from '../../../interface/filter.enum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  todoService = inject(TodoService);
  filterSig = this.todoService.filterSig;

  filterEnum = FilterEnum;

  activeCount = computed(() => {
    return this.todoService.todoSig().filter((todo) => !todo.isCompleted)
      .length;
  });

  noTodosClass = computed(() => this.todoService.todoSig().length === 0);

  itemsLeftText = computed(
    () => `item${this.activeCount() !== 1 ? 's' : ''} left`
  );

  changeFilter(event: Event, filterName: FilterEnum): void {
    event.preventDefault();
    this.todoService.changeFilter(filterName);
  }
}
