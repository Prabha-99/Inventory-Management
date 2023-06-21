import { TestBed } from '@angular/core/testing';

import { StockKeeperGRNService } from './stock-keeper-grn.service';

describe('StockKeeperGINService', () => {
  let service: StockKeeperGRNService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockKeeperGRNService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
