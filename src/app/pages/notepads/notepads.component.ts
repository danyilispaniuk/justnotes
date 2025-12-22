import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Notepad } from '../../services/interfaces/notepad';
import { NotepadComponent } from '../../components/notepad/notepad.component';

@Component({
  selector: 'app-notepads',
  imports: [CommonModule, NotepadComponent],
  templateUrl: './notepads.component.html',
  styleUrl: './notepads.component.scss'
})
export class NotepadsComponent {
  notepadList: Notepad[] = [
      {
        "id": 1,
        "name": "First Notepad",
        "created": new Date().toISOString(),
        "updated": new Date().toISOString()
      },
      {
        "id": 2,
        "name": "Second Notepad",
        "created": new Date().toISOString(),
        "updated": new Date().toISOString()
      },
      {
        "id": 3,
        "name": "Third Notepad",
        "created": new Date().toISOString(),
        "updated": new Date().toISOString()
      },
      {
        "id": 4,
        "name": "Fourth Notepad",
        "created": new Date().toISOString(),
        "updated": new Date().toISOString()
      }
    ]
}
