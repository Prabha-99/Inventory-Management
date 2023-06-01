import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAdminDashComponent } from './system-admin-dash.component';

describe('SystemAdminDashComponent', () => {
  let component: SystemAdminDashComponent;
  let fixture: ComponentFixture<SystemAdminDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemAdminDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemAdminDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
