import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAdminSideComponent } from './system-admin-side.component';

describe('SystemAdminSideComponent', () => {
  let component: SystemAdminSideComponent;
  let fixture: ComponentFixture<SystemAdminSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemAdminSideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemAdminSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
