import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerProfileComponent } from './designer-profile.component';

describe('DesignerProfileComponent', () => {
  let component: DesignerProfileComponent;
  let fixture: ComponentFixture<DesignerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignerProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
