import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneNotepadComponent } from './one.notepad.component';

describe('OneNotepadComponent', () => {
  let component: OneNotepadComponent;
  let fixture: ComponentFixture<OneNotepadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneNotepadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneNotepadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
