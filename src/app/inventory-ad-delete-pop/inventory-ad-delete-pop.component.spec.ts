import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAdDeletePopComponent } from './inventory-ad-delete-pop.component';

describe('InventoryAdDeletePopComponent', () => {
  let component: InventoryAdDeletePopComponent;
  let fixture: ComponentFixture<InventoryAdDeletePopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryAdDeletePopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryAdDeletePopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
