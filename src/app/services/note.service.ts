import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from './interfaces/note';
import { env } from '../../enviroments/env';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private request = `${env.api.notes}`;
  private requestByNotepad = `${env.api.notepad_notes}`;

  constructor(private http: HttpClient) { }

  getNotes(): Observable<any> {
    return this.http.get<Note[]>(this.request);
  }

  getNote(id: string): Observable<any> {
    return this.http.get<Note>(this.request + id);
  }

  getNotesByNotepad(id: string): Observable<any> {
    return this.http.get<Note[]>(this.requestByNotepad + id);
  }
}
