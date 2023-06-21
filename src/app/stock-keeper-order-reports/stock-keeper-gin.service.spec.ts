import { TestBed } from '@angular/core/testing';

import { StockKeeperGINService } from './stock-keeper-gin.service';

describe('StockKeeperGINService', () => {
  let service: StockKeeperGINService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockKeeperGINService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
