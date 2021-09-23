import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';
import { ModalRef } from '../../models/modal-ref';
import { ModalConfig } from '../../models/modal-config';
import { DIALOG_DATA } from '../../injection-tokens';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalComponent],
      providers: [
        { provide: ModalRef, useValue: new ModalRef() },
        { provide: ModalConfig, useValue: {} },
        { provide: DIALOG_DATA, useValue: { data: 'Pika Boo' } },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have data', () => {
    const result = component.data.data;
    expect(result).toBe('Pika Boo');
  });
});
