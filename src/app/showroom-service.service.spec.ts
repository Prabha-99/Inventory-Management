

import { TestBed } from '@angular/core/testing';

import { ShowroomServiceService } from './showroom-service.service';

describe('FileUploadService', () => {
  let service: ShowroomServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowroomServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

