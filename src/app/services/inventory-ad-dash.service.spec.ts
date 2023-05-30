import { TestBed } from '@angular/core/testing';

import { InventoryAdDashService } from './inventory-ad-dash.service';

describe('InventoryAdDashService', () => {
  let service: InventoryAdDashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventoryAdDashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
