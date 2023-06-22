import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOneUserComponent } from './update-one-user.component';

describe('UpdateOneUserComponent', () => {
  let component: UpdateOneUserComponent;
  let fixture: ComponentFixture<UpdateOneUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOneUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateOneUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
