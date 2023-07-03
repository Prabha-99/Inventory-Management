import { TestBed } from '@angular/core/testing';

import { GRNService } from './grn.service';

describe('GRNService', () => {
  let service: GRNService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GRNService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
