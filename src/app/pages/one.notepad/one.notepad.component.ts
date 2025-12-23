import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from '../../components/note/note.component';
import { Note } from '../../services/interfaces/note';
import { Notepad } from '../../services/interfaces/notepad';

@Component({
  selector: 'app-one.notepad',
  imports: [CommonModule, NoteComponent],
  templateUrl: './one.notepad.component.html',
  styleUrl: './one.notepad.component.scss'
})
export class OneNotepadComponent {
  isReadOnly: boolean = true;
  notepad: Notepad = {
    id: 54,
    name: "testing notepad",
    created: new Date().toISOString(),
    updated: new Date().toISOString()
  }

  noteList: Note[] = [
      {
        "id": 1,
        "header": "First Note",
        "notes": "This is the text for the first note.",
        "created": new Date().toISOString()
      },
      {
        "id": 2,
        "header": "Second Note",
        "notes": "This is another note.",
        "created": new Date().toISOString()
      },
      {
        "id": 3,
        "header": "Third Note",
        "notes": "And a third one for good measure.",
        "created": new Date().toISOString()
      },
      {
        "id": 4,
        "header": "Fourth Note",
        "notes": "Another one to fill the grid.",
        "created": new Date().toISOString()
      }
    ]
}
