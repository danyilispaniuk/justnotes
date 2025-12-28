import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoteService } from '../../services/note.service';
import { Note } from '../../services/interfaces/note';
import { NewNote } from '../../services/interfaces/new.note';

@Component({
  selector: 'app-one.note',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './one.note.component.html',
  styleUrl: './one.note.component.scss'
})
export class OneNoteComponent {
  constructor(
    private noteService: NoteService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
  ){}

  isReadOnly: boolean = true

  noteId!: string;

  oldNote: Note = {
    id: 1,
    header: "testing",
    notes: "This is my new notes.",
    created: new Date().toISOString()
  }

  note: Note = {
    id: 1,
    header: "testing",
    notes: "This is my new notes.",
    created: new Date().toISOString()
  }
  
  // update JSON
  // {
  //   "id": null,
  //   "notepadId": null,
  //   "header": "update 24-12,0912",
  //   "notes": "update 24-12,0912",
  //   "created": null,
  //   "updated": null
  // }

  ngOnInit(): void{
    console.log(this.note)
    this.route.paramMap.subscribe(params => {
        this.noteId = params.get('id')!;
        console.log('Note ID:', this.noteId);
        this.noteService.getNote(this.noteId).subscribe(response => {
          console.log(response);
          this.note = response;
          this.oldNote = response; // For discard func
        });
    });
  }

  onSubmit(): void {
    const payload: NewNote = {
      id: null,
      notepadId: null, //tmp
      header: this.note.header,
      notes: this.note.notes
    }

    console.log(payload)
    
    this.noteService.updateNote(payload, this.noteId).subscribe({
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

  onDiscard(): void {
    this.note = { ...this.oldNote }
    this.isReadOnly = !this.isReadOnly
  }

  onDelete(): void {
    this.noteService.deleteNote(this.noteId).subscribe({
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
