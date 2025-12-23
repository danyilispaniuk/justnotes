import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NewNotepad } from '../../services/interfaces/new.notepad';
import { NotepadService } from '../../services/notepad.service';

@Component({
  selector: 'app-new.notepad',
  imports: [ReactiveFormsModule],
  templateUrl: './new.notepad.component.html',
  styleUrl: './new.notepad.component.scss'
})
export class NewNotepadComponent {  
  notepadForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private notepadService: NotepadService
  ){
    this.notepadForm = this.fb.group({
      name: ['']
    });
  }

  onSubmit(){
    console.log("submit...");
    console.log(this.notepadForm.value);
    const payload: NewNotepad = {
      id: null,
      name: this.notepadForm.value.name
    }

      this.notepadService.createNotepad(payload).subscribe({
      next: response => {
        console.log("Success")
        console.log(response)
        this.router.navigate(['/notepad/'+ response.id]);
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
