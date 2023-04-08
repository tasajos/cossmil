import { TestBed } from '@angular/core/testing';

import { PacientinService } from './pacientin.service';

describe('PacientinService', () => {
  let service: PacientinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PacientinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
