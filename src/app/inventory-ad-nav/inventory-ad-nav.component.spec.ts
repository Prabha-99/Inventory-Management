import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAdNavComponent } from './inventory-ad-nav.component';

describe('InventoryAdNavComponent', () => {
  let component: InventoryAdNavComponent;
  let fixture: ComponentFixture<InventoryAdNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryAdNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryAdNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
