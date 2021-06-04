import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuComponent } from './side-menu.component';
import { RouterTestingModule } from '@angular/router/testing';
import { EventBusService } from '../../services/event-bus.service';

describe('SideMenuComponent', () => {
  let component: SideMenuComponent;
  let bus: EventBusService;
  let fixture: ComponentFixture<SideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideMenuComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuComponent);
    component = fixture.componentInstance;
    bus = TestBed.inject(EventBusService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run close by EventBus event', done => {
    const closeSpy = spyOn(component, 'close');

    bus.closeAll$.subscribe(() => {
      expect(closeSpy).toHaveBeenCalledOnceWith();

      done();
    });

    bus.closeAll();
  });
});
