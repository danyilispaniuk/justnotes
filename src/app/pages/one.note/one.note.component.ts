import { Component } from '@angular/core';
import { Note } from '../../services/interfaces/note';

@Component({
  selector: 'app-one.note',
  imports: [],
  templateUrl: './one.note.component.html',
  styleUrl: './one.note.component.scss'
})
export class OneNoteComponent {
  isReadOnly: boolean = true

  note: Note = {
    id: 1,
    header: "testing",
    notes: "This is my new notes.",
    created: new Date().toISOString()
  }
}
