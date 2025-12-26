import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from '../../components/note/note.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Note } from '../../services/interfaces/note';
import { Notepad } from '../../services/interfaces/notepad';
import { NewNotepad } from '../../services/interfaces/new.notepad';
import { NotepadService } from '../../services/notepad.service';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-one.notepad',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, NoteComponent],
  templateUrl: './one.notepad.component.html',
  styleUrl: './one.notepad.component.scss'
})
export class OneNotepadComponent {
  constructor(
    private notepadService: NotepadService,
    private noteService: NoteService,
    private route: ActivatedRoute,
    private router: Router,
  ){}

  notepadId!: string;
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

  notepadOld: Notepad = {
    id: 54,
    name: "testing notepad",
    created: new Date().toISOString(),
    updated: new Date().toISOString()
  }
  
  ngOnInit(): void{
    this.route.paramMap.subscribe(params => {
        this.notepadId = params.get('id')!;
        console.log('Note ID:', this.notepadId);
        this.notepadService.getNotepad(this.notepadId).subscribe(response => {
          console.log(response);
          this.notepad = response;
          this.notepadOld = response;
        });

        this.noteService.getNotesByNotepad(this.notepadId).subscribe(response => {
          console.log(response);
          this.noteList = response;
        });
    });
  }

  onSubmit(): void{
    const payload: NewNotepad = {
        id: null,
        name: this.notepad.name
      }
    
    console.log(payload)
        
    this.notepadService.updateNotepad(payload, this.notepadId).subscribe({
      next: response => {
        console.log("Success")
        this.isReadOnly = !this.isReadOnly
        // console.log(response)
        // this.router.navigate(['/note/'+ response.id]);
      },
      error: err => { 
        console.log("Error occured")
        if (err.status === 400 && err.error?.message) {
          console.log("ERROR: ", err.error.message);
        } else {
          console.log("UNEXPECTED ERROR: ", err.error.message);
        }
      }
    });
  }

  onDiscard(): void{
    this.notepad = { ...this.notepadOld }
    this.isReadOnly = !this.isReadOnly
  }

  onDelete(): void{
    this.notepadService.deleteNotepad(this.notepadId).subscribe({
      next: response => {
        console.log("Success")
        this.router.navigate(['']);
      },
      error: err => { 
        console.log("Error occured")
        if (err.status === 400 && err.error?.message) {
          console.log("ERROR: ", err.error.message);
        } else {
          console.log("UNEXPECTED ERROR: ", err.error.message);
        }
      }
    });
  }
}
