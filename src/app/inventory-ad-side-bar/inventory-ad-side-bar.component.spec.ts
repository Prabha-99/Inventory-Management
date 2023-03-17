import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAdSideBarComponent } from './inventory-ad-side-bar.component';

describe('InventoryAdSideBarComponent', () => {
  let component: InventoryAdSideBarComponent;
  let fixture: ComponentFixture<InventoryAdSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryAdSideBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryAdSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
