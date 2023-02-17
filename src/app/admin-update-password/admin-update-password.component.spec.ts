import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdatePasswordComponent } from './admin-update-password.component';

describe('AdminUpdatePasswordComponent', () => {
  let component: AdminUpdatePasswordComponent;
  let fixture: ComponentFixture<AdminUpdatePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUpdatePasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUpdatePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
