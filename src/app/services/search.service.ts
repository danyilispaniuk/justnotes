import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from './interfaces/note';
import { Notepad } from './interfaces/notepad';
import { env } from '../../enviroments/env';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private request = `${env.api.search}`;

  constructor(private http: HttpClient) { }

  getSearch(search: string): Observable<any> {
    return this.http.get<any>(this.request + search);
  }
}
