import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, catchError, retry } from 'rxjs';

import { Board, Boards } from '../interfaces/interfaces';
import { HandleError, HttpErrorHandler } from './http-error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {

  boardsUrl = 'assets/data/boards.json'

  private handleError: HandleError;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('HeroesService');
  }

  getBoards(): Observable<Boards> {
    return this.http.get<Boards>(this.boardsUrl).pipe(
      retry(3), // retry a failed request up to 3 times
      // catchError(this.handleError('getBoards', []))
    )
  }

  getBoard(url: string): Observable<Board> {
    return this.http.get<Board>(url)
  }

}
