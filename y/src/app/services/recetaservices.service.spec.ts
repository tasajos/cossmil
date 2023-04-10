import { TestBed } from '@angular/core/testing';

import { RecetaservicesService } from './recetaservices.service';

describe('RecetaservicesService', () => {
  let service: RecetaservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecetaservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
