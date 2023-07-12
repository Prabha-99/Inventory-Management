import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerSendGINComponent } from './designer-send-gin.component';

describe('DesignerSendGINComponent', () => {
  let component: DesignerSendGINComponent;
  let fixture: ComponentFixture<DesignerSendGINComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignerSendGINComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignerSendGINComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
