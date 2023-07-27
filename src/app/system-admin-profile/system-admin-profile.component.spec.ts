import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAdminProfileComponent } from './system-admin-profile.component';

describe('SystemAdminProfileComponent', () => {
  let component: SystemAdminProfileComponent;
  let fixture: ComponentFixture<SystemAdminProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemAdminProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemAdminProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
