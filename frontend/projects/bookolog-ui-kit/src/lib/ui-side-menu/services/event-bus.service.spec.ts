import { TestBed } from '@angular/core/testing';

import { EventBusService } from './event-bus.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('EventBusService', () => {
  let service: EventBusService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });
    service = TestBed.inject(EventBusService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should emit open', done => {
    service.open$.subscribe(() => done());

    service.open();
  });

  it('should emit closeAll', done => {
    service.closeAll$.subscribe(() => done());

    service.closeAll();
  });

  it('should emit navigated', done => {
    service.navigated$.subscribe(() => done());

    router.navigate(['/']);
  });
});
