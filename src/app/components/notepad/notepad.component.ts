import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Notepad } from '../../services/interfaces/notepad';

@Component({
  selector: 'app-notepad',
  imports: [RouterModule],
  templateUrl: './notepad.component.html',
  styleUrl: './notepad.component.scss'
})
export class NotepadComponent {
  @Input() notepad!: Notepad;
}
