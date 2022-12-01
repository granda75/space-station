import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationNoteDialogComponent } from './location-note-dialog.component';

describe('LocationNoteDialogComponent', () => {
  let component: LocationNoteDialogComponent;
  let fixture: ComponentFixture<LocationNoteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationNoteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationNoteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
