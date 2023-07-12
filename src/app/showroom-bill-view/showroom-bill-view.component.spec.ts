import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowroomBillViewComponent } from './showroom-bill-view.component';

describe('ShowroomBillViewComponent', () => {
  let component: ShowroomBillViewComponent;
  let fixture: ComponentFixture<ShowroomBillViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowroomBillViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowroomBillViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
