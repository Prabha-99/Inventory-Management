import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StockKeeperOrderReportsGRNComponent } from './stock-keeper-order-reports-grn.component';
 

describe('StockKeeperOrderReportsGRNComponent', () => {
  let component: StockKeeperOrderReportsGRNComponent;
  let fixture: ComponentFixture<StockKeeperOrderReportsGRNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockKeeperOrderReportsGRNComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockKeeperOrderReportsGRNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
