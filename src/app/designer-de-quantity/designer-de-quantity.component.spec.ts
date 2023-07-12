import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerDeQuantityComponent } from './designer-de-quantity.component';

describe('DesignerDeQuantityComponent', () => {
  let component: DesignerDeQuantityComponent;
  let fixture: ComponentFixture<DesignerDeQuantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignerDeQuantityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignerDeQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
