import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDashComponent } from './report-dash.component';

describe('ReportDashComponent', () => {
  let component: ReportDashComponent;
  let fixture: ComponentFixture<ReportDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
