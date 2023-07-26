import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerCreateGinComponent } from './designer-create-gin.component';

describe('DesignerCreateGinComponent', () => {
  let component: DesignerCreateGinComponent;
  let fixture: ComponentFixture<DesignerCreateGinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignerCreateGinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignerCreateGinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
