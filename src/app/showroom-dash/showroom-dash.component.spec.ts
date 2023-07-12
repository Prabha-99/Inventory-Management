import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowroomDashComponent } from './showroom-dash.component';

describe('ShowroomDashComponent', () => {
  let component: ShowroomDashComponent;
  let fixture: ComponentFixture<ShowroomDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowroomDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowroomDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
