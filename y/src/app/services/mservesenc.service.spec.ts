import { TestBed } from '@angular/core/testing';

import { MservesencService } from './mservesenc.service';

describe('MservesencService', () => {
  let service: MservesencService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MservesencService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
