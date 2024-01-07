import { Component, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/ui/header/header.component';
import { SideInfoComponent } from './components/ui/side-info/side-info.component';
import { BoardsService } from './common/service/boards.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { firstValueFrom } from 'rxjs';
import { BoardInfo } from './common/interfaces/interfaces';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, SideInfoComponent],
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
