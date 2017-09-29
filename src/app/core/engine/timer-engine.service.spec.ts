import { TestBed, inject } from '@angular/core/testing';

import { TimerEngineService } from './timer-engine.service';

describe('TimerEngineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimerEngineService]
    });
  });

  it('should be created', inject([TimerEngineService], (service: TimerEngineService) => {
    expect(service).toBeTruthy();
  }));
});
