import { TestBed } from '@angular/core/testing';

import { PurchaseCoordinatorPurchaseOrderService } from './purchase-coordinator-purchase-order.service';

describe('PurchaseCoordinatorPurchaseOrderService', () => {
  let service: PurchaseCoordinatorPurchaseOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchaseCoordinatorPurchaseOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
