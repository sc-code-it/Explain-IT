import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Config {
  heroesUrl: string;
  textfile: string;
  date: any;
  test: any;
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  configUrl = 'assets/data/config.json';

  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get<Config>(this.configUrl);
  }

}
