import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from './interfaces/note';
import { env } from '../../enviroments/env';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private requestNotes = `${env.api.notes}`;
  // private request = `${env.api.}/`;

  constructor(private http: HttpClient) { }

  getNotes(): Observable<any> {
    return this.http.get<Note[]>(this.requestNotes);
  }

  getNote(id: string): Observable<any> {
    return this.http.get<Note>(this.requestNotes + id);
  }
}
