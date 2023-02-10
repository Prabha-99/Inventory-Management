import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminprofileComponent } from './adminprofile.component';

describe('AdminprofileComponent', () => {
  let component: AdminprofileComponent;
  let fixture: ComponentFixture<AdminprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
