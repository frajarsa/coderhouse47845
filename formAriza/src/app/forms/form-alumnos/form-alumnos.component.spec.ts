import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAlumnosComponent } from './form-alumnos.component';

describe('FormAlumnosComponent', () => {
  let component: FormAlumnosComponent;
  let fixture: ComponentFixture<FormAlumnosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAlumnosComponent]
    });
    fixture = TestBed.createComponent(FormAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
