import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAdminNavComponent } from './system-admin-nav.component';

describe('SystemAdminNavComponent', () => {
  let component: SystemAdminNavComponent;
  let fixture: ComponentFixture<SystemAdminNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemAdminNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemAdminNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
