import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockKeeperProfileComponent } from './stock-keeper-profile.component';

describe('StockKeeperProfileComponent', () => {
  let component: StockKeeperProfileComponent;
  let fixture: ComponentFixture<StockKeeperProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockKeeperProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockKeeperProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
