import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let element: HTMLElement = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    element = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('color methods', () => {
    it('should return true for HEX', () => {
      const result = component.isHex('#713FC2');
      expect(result).toBeTrue();
    });

    it('should return false for color name', () => {
      const result = component.isHex('primary');
      expect(result).toBeFalse();
    });
  });

  describe('bindings', () => {
    it('color bind', () => {
      component.color = 'danger';
      fixture.detectChanges();

      const bindingValue =  element.getAttribute('data-bui-color');

      expect(bindingValue).toEqual('danger');
    });

    it('design bind', () => {
      component.design = 'flat';
      fixture.detectChanges();

      const bindingValue =  element.getAttribute('data-bui-design');

      expect(bindingValue).toEqual('flat');
    });
  });
});
