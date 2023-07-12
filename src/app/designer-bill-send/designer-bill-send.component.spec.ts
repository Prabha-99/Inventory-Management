import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerBillSendComponent } from './designer-bill-send.component';

describe('DesignerBillSendComponent', () => {
  let component: DesignerBillSendComponent;
  let fixture: ComponentFixture<DesignerBillSendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignerBillSendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignerBillSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
