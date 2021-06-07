import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldSetComponent } from './form-field-set.component';

describe('FormFieldSetComponent', () => {
  let component: FormFieldSetComponent;
  let fixture: ComponentFixture<FormFieldSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFieldSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
