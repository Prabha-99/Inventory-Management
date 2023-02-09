import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingupComponent } from './singup.component';

describe('SingupComponent', () => {
  let component: SingupComponent;
  let fixture: ComponentFixture<SingupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
