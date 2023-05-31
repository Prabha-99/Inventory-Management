import { TestBed } from '@angular/core/testing';

import { StockManagerProductService } from './stock-manager-product.service';

describe('StockManagerProductService', () => {
  let service: StockManagerProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockManagerProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
