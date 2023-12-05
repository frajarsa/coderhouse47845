import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { CoursesTableComponent } from './courses-table.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from 'src/app/material/material.module';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { NewCourseDialogComponent } from 'src/app/features/courses-table/new-course-dialog/new-course-dialog.component';
import { CoursesService } from 'src/app/services/courses.service';
import { MockProvider } from 'ng-mocks'
import { By } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

describe('CoursesTableComponent', () => {
  let component: CoursesTableComponent;
  let fixture: ComponentFixture<CoursesTableComponent>;
  let dialog: MatDialog;


  beforeEach(() => {
    
    TestBed.configureTestingModule({
      declarations: [CoursesTableComponent],
      providers: [
        provideAnimations(),
        MockProvider(CoursesService, {
          get: jasmine.createSpy().and.returnValue(of([
            {
              id: 1,
              name: "test",
              category:"",
              fechaInicio:"",
              fechaFinal:"",
              classes: []
            }
          ]))
        }),
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

  it('Should call dialog for new course when agregar is clicked', async () => {
    dialog = TestBed.inject(MatDialog)
    fixture = TestBed.createComponent(CoursesTableComponent);
    component = fixture.componentInstance;
    const openDialogSpy = spyOn(component.dialog, "open")


    const button = fixture.debugElement.query(By.css('#btn-agregar'));
    button.triggerEventHandler('click', null);


    expect(openDialogSpy).toHaveBeenCalled()
  })

  it('Should call dialog for edit course when editar is clicked', async () => {
    dialog = TestBed.inject(MatDialog)
    fixture = TestBed.createComponent(CoursesTableComponent);
    component = fixture.componentInstance;
    const openDialogSpy = spyOn(component.dialog, "open")

    fixture.detectChanges()
    await fixture.whenStable()

    const button = fixture.debugElement.query(By.css('#btn-editar'));
    button.triggerEventHandler('click', null);


    expect(openDialogSpy).toHaveBeenCalled()
  })

  it('Should call dialog for eliminar course when eliminar is clicked', async () => {
    dialog = TestBed.inject(MatDialog)
    fixture = TestBed.createComponent(CoursesTableComponent);
    component = fixture.componentInstance;
    const openDialogSpy = spyOn(component.dialog, "open")

    fixture.detectChanges()
    await fixture.whenStable()

    const button = fixture.debugElement.query(By.css('#btn-eliminar'));
    button.triggerEventHandler('click', null);


    expect(openDialogSpy).toHaveBeenCalled()
  })

  it('Should call dialog for ver course when ver is clicked', async () => {
    dialog = TestBed.inject(MatDialog)
    fixture = TestBed.createComponent(CoursesTableComponent);
    component = fixture.componentInstance;
    const openDialogSpy = spyOn(component.dialog, "open")

    fixture.detectChanges()
    await fixture.whenStable()

    const button = fixture.debugElement.query(By.css('#btn-ver'));
    button.triggerEventHandler('click', null);


    expect(openDialogSpy).toHaveBeenCalled()
  })
});

