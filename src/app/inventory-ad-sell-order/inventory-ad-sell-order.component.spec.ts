import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAdSellOrderComponent } from './inventory-ad-sell-order.component';

describe('InventoryAdSellOrderComponent', () => {
  let component: InventoryAdSellOrderComponent;
  let fixture: ComponentFixture<InventoryAdSellOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryAdSellOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryAdSellOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
