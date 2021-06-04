import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuHostComponent } from './side-menu-host.component';
import { RouterTestingModule } from '@angular/router/testing';
import { EventBusService } from '../../services/event-bus.service';
import { Router } from '@angular/router';

describe('SideMenuHostComponent', () => {
  let component: SideMenuHostComponent;
  let bus: EventBusService;
  let router: Router;
  let fixture: ComponentFixture<SideMenuHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideMenuHostComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuHostComponent);
    component = fixture.componentInstance;
    bus = TestBed.inject(EventBusService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run close by router navigated event', done => {
    const closeSpy = spyOn(component, 'closeAll');

    bus.navigated$.subscribe(() => {
      expect(closeSpy).toHaveBeenCalledOnceWith();

      done();
    });

    router.navigate(['/']);
  });
});
