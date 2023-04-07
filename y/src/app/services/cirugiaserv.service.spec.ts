import { TestBed } from '@angular/core/testing';

import { CirugiaservService } from './cirugiaserv.service';

describe('CirugiaservService', () => {
  let service: CirugiaservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CirugiaservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
