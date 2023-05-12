import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BillingViewComponent } from './billing-view.component';

describe('BillingViewComponent', () => {
  let component: BillingViewComponent;
  let fixture: ComponentFixture<BillingViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
