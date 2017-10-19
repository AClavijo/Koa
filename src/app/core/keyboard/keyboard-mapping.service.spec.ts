import { TestBed, inject } from '@angular/core/testing';

import { KeyboardMappingService } from './keyboard-mapping.service';

describe('KeyboardMappingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KeyboardMappingService]
    });
  });

  it('should be created', inject([KeyboardMappingService], (service: KeyboardMappingService) => {
    expect(service).toBeTruthy();
  }));
});
