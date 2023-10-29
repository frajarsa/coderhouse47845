import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCoursesDialogComponent } from './edit-courses-dialog.component';

describe('EditCoursesDialogComponent', () => {
  let component: EditCoursesDialogComponent;
  let fixture: ComponentFixture<EditCoursesDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCoursesDialogComponent]
    });
    fixture = TestBed.createComponent(EditCoursesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
