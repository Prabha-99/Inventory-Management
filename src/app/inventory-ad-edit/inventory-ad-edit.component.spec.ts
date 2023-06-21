import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAdEditComponent } from './inventory-ad-edit.component';

describe('InventoryAdEditComponent', () => {
  let component: InventoryAdEditComponent;
  let fixture: ComponentFixture<InventoryAdEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryAdEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryAdEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
