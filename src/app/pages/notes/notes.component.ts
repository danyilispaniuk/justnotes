import { Component } from '@angular/core';
import { NoteComponent } from '../../components/note/note.component';
import { Note } from '../../services/interfaces/note';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [CommonModule, NoteComponent],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent {
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
