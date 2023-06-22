import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAdSellingComponent } from './inventory-ad-selling.component';

describe('InventoryAdSellingComponent', () => {
  let component: InventoryAdSellingComponent;
  let fixture: ComponentFixture<InventoryAdSellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryAdSellingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryAdSellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
