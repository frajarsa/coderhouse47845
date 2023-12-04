import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { CoursesTableComponent } from './courses-table.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from 'src/app/material/material.module';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { NewCourseDialogComponent } from 'src/app/features/courses-table/new-course-dialog/new-course-dialog.component';
import { CoursesService } from 'src/app/services/courses.service';
import { MockProvider } from 'ng-mocks'

describe('CoursesTableComponent', () => {
  let component: CoursesTableComponent;
  let fixture: ComponentFixture<CoursesTableComponent>;
  let dialog: MatDialog;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesTableComponent],
      providers: [
        MockProvider(CoursesService),
        MockProvider(NewCourseDialogComponent),
        {
          provide: MatDialogRef,
          useValue: {
            afterClosed: () => ({ subscribe: () => {} }),
          },
        },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
      imports: [ 
        MaterialModule,
        RouterTestingModule,
        HttpClientTestingModule,
        MatDialogModule
       ]
    });
  });

  it('should create the courseTable component', () => {
    fixture = TestBed.createComponent(CoursesTableComponent);
    component = fixture.componentInstance;
    
    expect(component).toBeTruthy();
  });

  it('Should call dialog for new course when agregar is clicked', () => {
    dialog = TestBed.inject(MatDialog)
    fixture = TestBed.createComponent(CoursesTableComponent);
    component = fixture.componentInstance;

    
    const openDialogSpy = spyOn(dialog, 'open').and.returnValue({} as any);
    component.agregar()
    expect(openDialogSpy).toHaveBeenCalledWith(NewCourseDialogComponent)






  })


});

