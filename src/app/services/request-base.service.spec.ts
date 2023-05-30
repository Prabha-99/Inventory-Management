import { TestBed } from '@angular/core/testing';

import { RequestBaseService } from './request-base.service';

describe('RequestBaseService', () => {
  let service: RequestBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
