import { Component, Input } from '@angular/core';
import { Notepad } from '../../services/interfaces/notepad';

@Component({
  selector: 'app-notepad',
  imports: [],
  templateUrl: './notepad.component.html',
  styleUrl: './notepad.component.scss'
})
export class NotepadComponent {
  @Input() notepad!: Notepad;
}
