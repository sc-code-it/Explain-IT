import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry } from 'rxjs';
import {
  HandleError,
  HttpErrorHandler,
} from '../../../common/service/http-error-handler.service';
import { Hero } from '../../../common/interfaces/interfaces';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  heroesUrl = 'api/heroes'; // URL to web api
  private handleError: HandleError;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('HeroesService');
  }

  /** GET heroes from the server */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError('getHeroes', []))
    );
  }

  getConfigResponse(): Observable<HttpResponse<Hero[]>> {
    return this.http.get<Hero[]>(this.heroesUrl, { observe: 'response' });
  }

  /** POST: add a new hero to the database */
  addHero(hero: Hero): Observable<Hero> {
    return this.http
      .post<Hero>(this.heroesUrl, hero, httpOptions)
      .pipe(catchError(this.handleError('addHero', hero)));
  }
}
