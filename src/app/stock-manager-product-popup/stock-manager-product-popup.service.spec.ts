import { TestBed } from '@angular/core/testing';

import { StockManagerProductPopupService } from './stock-manager-product-popup.service';

describe('StockManagerProductPopupService', () => {
  let service: StockManagerProductPopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockManagerProductPopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
