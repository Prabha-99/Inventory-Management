/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DesignerProductService } from './designer-product.service';

describe('Service: DesignerProduct', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DesignerProductService]
    });
  });

  it('should ...', inject([DesignerProductService], (service: DesignerProductService) => {
    expect(service).toBeTruthy();
  }));
});
