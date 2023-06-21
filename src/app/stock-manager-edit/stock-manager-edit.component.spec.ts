import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockManagerEditComponent } from './stock-manager-edit.component';

describe('StockManagerEditComponent', () => {
  let component: StockManagerEditComponent;
  let fixture: ComponentFixture<StockManagerEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockManagerEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockManagerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
