import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from './interfaces/note';
import { Notepad } from './interfaces/notepad';
import { env } from '../../enviroments/env';

@Injectable({
  providedIn: 'root'
})
export class NotepadService {
  private request = `${env.api.notepads}`;

  constructor(private http: HttpClient) { }

  getNotepads(): Observable<any> {
    return this.http.get<Notepad[]>(this.request);
  }

  getNotepad(id: string): Observable<any> {
    return this.http.get<Notepad>(this.request + id);
  }
}
