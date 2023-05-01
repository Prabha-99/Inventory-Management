import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAdDashComponent } from './inventory-ad-dash.component';

describe('InventoryAdDashComponent', () => {
  let component: InventoryAdDashComponent;
  let fixture: ComponentFixture<InventoryAdDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryAdDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryAdDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
