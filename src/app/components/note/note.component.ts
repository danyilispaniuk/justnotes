import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Note } from '../../services/interfaces/note';

@Component({
  selector: 'app-note',
  imports: [RouterModule],
  templateUrl: './note.component.html',
  styleUrl: './note.component.scss'
})
export class NoteComponent {
  @Input() note!: Note;
}
