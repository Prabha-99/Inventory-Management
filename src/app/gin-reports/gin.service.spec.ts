import { TestBed } from '@angular/core/testing';

import { GINService } from './gin.service';

describe('GINService', () => {
  let service: GINService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GINService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
