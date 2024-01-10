import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { firstValueFrom } from 'rxjs';

import { TodosComponent } from './components/pages/todos/todos.component';
import { BoardsService } from './common/service/boards.service';
import { BoardInfo } from './common/interfaces/interfaces';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  boardsService = inject(BoardsService);

  test = signal<BoardInfo | undefined>(undefined);

  constructor() {
    this.search()
  }

  async search() {
    const boardData = await firstValueFrom(this.boardsService.getBoard());
    this.test.set(boardData);
  }
}
