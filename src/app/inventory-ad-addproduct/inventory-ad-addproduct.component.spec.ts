import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAdAddproductComponent } from './inventory-ad-addproduct.component';

describe('InventoryAdAddproductComponent', () => {
  let component: InventoryAdAddproductComponent;
  let fixture: ComponentFixture<InventoryAdAddproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryAdAddproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryAdAddproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
