import { TestBed, inject } from '@angular/core/testing';

import { KeyboardEngineService } from './keyboard-engine.service';

describe('KeyboardEngineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KeyboardEngineService]
    });
  });

  it('should be created', inject([KeyboardEngineService], (service: KeyboardEngineService) => {
    expect(service).toBeTruthy();
  }));
});
