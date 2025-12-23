import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNotepadComponent } from './new.notepad.component';

describe('NewNotepadComponent', () => {
  let component: NewNotepadComponent;
  let fixture: ComponentFixture<NewNotepadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewNotepadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewNotepadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
