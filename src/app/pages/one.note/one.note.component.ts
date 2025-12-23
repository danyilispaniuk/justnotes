import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from '../../services/note.service';
import { Note } from '../../services/interfaces/note';

@Component({
  selector: 'app-one.note',
  imports: [],
  templateUrl: './one.note.component.html',
  styleUrl: './one.note.component.scss'
})
export class OneNoteComponent {
  constructor(
    private noteService: NoteService,
    private route: ActivatedRoute
  ){}

  isReadOnly: boolean = true

  noteId!: string;

  note: Note = {
    id: 1,
    header: "testing",
    notes: "This is my new notes.",
    created: new Date().toISOString()
  }

  ngOnInit(): void{
    console.log(this.note)
    this.route.paramMap.subscribe(params => {
        this.noteId = params.get('id')!;
        console.log('Note ID:', this.noteId);
        this.noteService.getNote(this.noteId).subscribe(response => {
          console.log(response);
          this.note = response;
        });
    });
  }
}
