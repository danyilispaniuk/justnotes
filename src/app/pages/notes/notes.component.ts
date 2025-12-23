import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from '../../components/note/note.component';
import { NoteService } from '../../services/note.service';
import { Note } from '../../services/interfaces/note';

@Component({
  selector: 'app-main',
  imports: [CommonModule, NoteComponent],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent {
  constructor(
    private noteService: NoteService
  ){}

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

  ngOnInit(): void {
    console.log(this.noteList)
    this.noteService.getNotes().subscribe(response => {
      console.log("responce: ", response);
      this.noteList = response;
      this.noteList.forEach((value: any, index: number) => {
        value.notes = value.notes.split(' ').slice(0, 30).join(' ');
        console.log(value.notes);
      });
    });
  }
}
