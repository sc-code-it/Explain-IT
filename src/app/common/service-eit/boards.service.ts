import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { Observable, catchError, delay, map, of, retry } from 'rxjs';

import { Board, BoardInfo } from '../interfaces-eit/interfaces';

@Injectable({
  providedIn: 'root',
})
export class BoardsService {
  http = inject(HttpClient);

  boardsUrl = 'assets/data/test-board.json';

  boardState = toSignal<BoardInfo>(this.loadBoard(this.boardsUrl));

  private loadBoard(url: string): Observable<BoardInfo> {
    return this.http.get<BoardInfo>(this.boardsUrl).pipe(
      delay(5000),
      retry(3),
      map((value) => ({ ...value, error: undefined })),
      catchError((err) =>
        of({
          left: undefined,
          right: undefined,
          section: undefined,
          error: err,
        })
      )
    );
  }

  readonly leftSideInfo = computed(() => this.boardState()?.left);
  readonly rightSideInfo = computed(() => this.boardState()?.right);
  readonly sectionInfo = computed(() => this.boardState()?.section);

  getBoard(url?: string): Observable<BoardInfo> {
    if(url === undefined) {
      url = this.boardsUrl
    }

    return this.http.get<BoardInfo>(url).pipe(
      delay(2000)
    )
    // return this.http.get<BoardInfo>(url, {
    //   params: {
    //     ...(url ? { url: url.toString() } : {}),
    //   },
    // })
  }

}
