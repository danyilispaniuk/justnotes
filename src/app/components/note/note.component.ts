import { Component, Input } from '@angular/core';
import { Note } from '../../services/interfaces/note';

@Component({
  selector: 'app-note',
  imports: [],
  templateUrl: './note.component.html',
  styleUrl: './note.component.scss'
})
export class NoteComponent {
  @Input() note!: Note;
}
