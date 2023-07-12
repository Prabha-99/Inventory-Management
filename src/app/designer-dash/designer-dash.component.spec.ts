import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerDashComponent } from './designer-dash.component';

describe('DesignerDashComponent', () => {
  let component: DesignerDashComponent;
  let fixture: ComponentFixture<DesignerDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignerDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignerDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
