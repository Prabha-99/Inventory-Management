import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GINReportsComponent } from './gin-reports.component';

describe('GINReportsComponent', () => {
  let component: GINReportsComponent;
  let fixture: ComponentFixture<GINReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GINReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GINReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
