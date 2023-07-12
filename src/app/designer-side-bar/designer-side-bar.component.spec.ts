import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerSideBarComponent } from './designer-side-bar.component';

describe('DesignerSideBarComponent', () => {
  let component: DesignerSideBarComponent;
  let fixture: ComponentFixture<DesignerSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignerSideBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignerSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
