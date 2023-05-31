import { TestBed } from '@angular/core/testing';

import { InventoryAdProductPopupService } from './inventory-ad-product-popup.service';

describe('InventoryAdProductPopupService', () => {
  let service: InventoryAdProductPopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventoryAdProductPopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
