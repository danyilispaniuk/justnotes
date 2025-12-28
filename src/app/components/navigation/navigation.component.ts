import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { SearchService } from '../../services/search.service';
import { Notepad } from '../../services/interfaces/notepad';
import { Note } from '../../services/interfaces/note';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService
  ){}

  // searchText = ""
  // notesRes: Note[] = []
  // notepadsRes: Notepad[] = []

  searchText = '';
  notesRes: any[] = [];
  notepadsRes: any[] = [];

  private searchSubject = new Subject<string>();

  ngOnInit(): void {
    this.searchSubject.pipe(
      debounceTime(500),              // ⏳ delay
      distinctUntilChanged(),         // ignore same text
      switchMap(text => {
        if (!text.trim()) {
          this.notesRes = [];
          this.notepadsRes = [];
          return [];
        }
        return this.searchService.getSearch(text);
      })
    ).subscribe(response => {
      this.notesRes = response[0] ?? [];
      this.notepadsRes = response[1] ?? [];
    });
  }

  onSearch(): void {
    this.searchSubject.next(this.searchText);
  }
}
