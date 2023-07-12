import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowroomSideBarComponent } from './showroom-side-bar.component';

describe('ShowroomSideBarComponent', () => {
  let component: ShowroomSideBarComponent;
  let fixture: ComponentFixture<ShowroomSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowroomSideBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowroomSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
