import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NoteService } from '../../services/note.service';
import { NewNotepad } from '../../services/interfaces/new.notepad';
import { NewNote } from '../../services/interfaces/new.note';

@Component({
  selector: 'app-new.note',
  imports: [ReactiveFormsModule],
  templateUrl: './new.note.component.html',
  styleUrl: './new.note.component.scss'
})
export class NewNoteComponent {
  noteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private noteService: NoteService
  ){
    this.noteForm = this.fb.group({
      header: [''],
      notepadId: [],
      notes: ['']
    });
  }
  
  onSubmit(){
    console.log("submit...");
    console.log(this.noteForm.value);
    const payload: NewNote = {
      id: null,
      notepadId: this.noteForm.value.notepadId,
      header: this.noteForm.value.header,
      notes: this.noteForm.value.notes
    }

    this.noteService.createNote(payload).subscribe({
      next: response => {
        console.log("Success")
        console.log(response)
        this.router.navigate(['/note/'+ response.id]);
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
