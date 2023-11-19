import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesTableComponent } from './courses-table.component';
import { NewCourseDialogComponent } from 'src/app/features/courses-table/new-course-dialog/new-course-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('CoursesTableComponent', () => {
  let component: CoursesTableComponent;
  let fixture: ComponentFixture<CoursesTableComponent>;
  let newCourseDialog: NewCourseDialogComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesTableComponent],
      providers: [NewCourseDialogComponent],
      imports: [MatDialogModule, BrowserAnimationsModule],
    });
    fixture = TestBed.createComponent(CoursesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    newCourseDialog = TestBed.inject(NewCourseDialogComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open dialog when "agregar" is called', () => {
    // Spy on the openDialog method of the dialogService
    const agregarSpy = spyOn(newCourseDialog, 'actualizar').and.callThrough();

    // Trigger the click event on the button
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();

    // Check if the openDialog method was called
    expect(agregarSpy).toHaveBeenCalled();
  });

});
