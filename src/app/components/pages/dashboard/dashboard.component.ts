import { Component, OnInit } from '@angular/core';

import { BoardsService } from '../../../common/service/boards.service';

import { Board, Boards } from '../../../common/interfaces/interfaces';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  config: Boards | undefined;
  selectedBoard: Board | undefined;

  constructor(private boardsService: BoardsService) {}

  ngOnInit(): void {
    // this.getBoards();
    this.getBoard('assets/data/base-board.json');
  }

  getBoards() {
    this.boardsService.getBoards().subscribe((data) => {
      this.config = { ...data };
      console.log(this.config.boards);
    });
  }

  getBoard(url: string) {
    this.boardsService.getBoard(url).subscribe((data) => {
      this.selectedBoard = { ...data }
      console.log(this.selectedBoard);
    })
  }
}
