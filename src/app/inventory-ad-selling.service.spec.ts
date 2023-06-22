import { TestBed } from '@angular/core/testing';

import { InventoryAdSellingService } from './inventory-ad-selling.service';

describe('InventoryAdSellingService', () => {
  let service: InventoryAdSellingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventoryAdSellingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
