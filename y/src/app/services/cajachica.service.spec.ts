import { TestBed } from '@angular/core/testing';

import { CajachicaService } from './cajachica.service';

describe('CajachicaService', () => {
  let service: CajachicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CajachicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
