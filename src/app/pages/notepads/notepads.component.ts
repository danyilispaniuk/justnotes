import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Notepad } from '../../services/interfaces/notepad';
import { NotepadComponent } from '../../components/notepad/notepad.component';
import { NotepadService } from '../../services/notepad.service';

@Component({
  selector: 'app-notepads',
  imports: [CommonModule, NotepadComponent],
  templateUrl: './notepads.component.html',
  styleUrl: './notepads.component.scss'
})
export class NotepadsComponent {
  constructor(
    private notepadService: NotepadService
  ){}

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

  ngOnInit(): void {
    console.log(this.notepadList)
    this.notepadService.getNotepads().subscribe(response => {
      console.log("responce: ", response);
      this.notepadList = response;
    });
  }
}
