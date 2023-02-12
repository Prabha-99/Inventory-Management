import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsidebarComponent } from './adminsidebar.component';

describe('AdminsidebarComponent', () => {
  let component: AdminsidebarComponent;
  let fixture: ComponentFixture<AdminsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminsidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
