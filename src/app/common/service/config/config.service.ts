import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Config {
  heroesUrl: string;
  textfile: string;
  date: any;
}

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
