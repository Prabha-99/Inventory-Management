import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowroomProfileComponent } from './showroom-profile.component';

describe('ShowroomProfileComponent', () => {
  let component: ShowroomProfileComponent;
  let fixture: ComponentFixture<ShowroomProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowroomProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowroomProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
