import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCoursesDialogComponent } from './view-courses-dialog.component';

describe('ViewCoursesDialogComponent', () => {
  let component: ViewCoursesDialogComponent;
  let fixture: ComponentFixture<ViewCoursesDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCoursesDialogComponent]
    });
    fixture = TestBed.createComponent(ViewCoursesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
