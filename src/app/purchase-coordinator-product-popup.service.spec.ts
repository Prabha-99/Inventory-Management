import { TestBed } from '@angular/core/testing';

import { PurchaseCoordinatorProductPopupService } from './purchase-coordinator-product-popup.service';

describe('PurchaseCoordinatorProductPopupService', () => {
  let service: PurchaseCoordinatorProductPopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchaseCoordinatorProductPopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
