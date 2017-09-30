import { TestBed, inject } from '@angular/core/testing';

import { ApmTestService } from './apm-test.service';

describe('ApmTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApmTestService]
    });
  });

  it('should be created', inject([ApmTestService], (service: ApmTestService) => {
    expect(service).toBeTruthy();
  }));
});
