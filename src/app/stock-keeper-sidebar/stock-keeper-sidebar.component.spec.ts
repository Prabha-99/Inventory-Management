import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockKeeperSidebarComponent } from './stock-keeper-sidebar.component';

describe('StockKeeperSidebarComponent', () => {
  let component: StockKeeperSidebarComponent;
  let fixture: ComponentFixture<StockKeeperSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockKeeperSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockKeeperSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
