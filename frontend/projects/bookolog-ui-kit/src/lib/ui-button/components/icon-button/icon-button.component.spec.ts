import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconButtonComponent } from './icon-button.component';

describe('IconButtonComponent', () => {
  let component: IconButtonComponent;
  let fixture: ComponentFixture<IconButtonComponent>;
  let element: HTMLElement = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    element = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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
