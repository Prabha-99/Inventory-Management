import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowroomComponent } from './showroom.component';

describe('ShowroomComponent', () => {
  let component: ShowroomComponent;
  let fixture: ComponentFixture<ShowroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowroomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
