import { TestBed } from '@angular/core/testing';

import { ContabiliadService } from './contabiliad.service';

describe('ContabiliadService', () => {
  let service: ContabiliadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContabiliadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
