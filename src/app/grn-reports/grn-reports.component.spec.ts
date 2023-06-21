import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GRNReportsComponent } from './grn-reports.component';

describe('GRNReportsComponent', () => {
  let component: GRNReportsComponent;
  let fixture: ComponentFixture<GRNReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GRNReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GRNReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
