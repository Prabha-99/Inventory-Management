import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowroomSendFileComponent } from './showroom-send-file.component';

describe('ShowroomSendFileComponent', () => {
  let component: ShowroomSendFileComponent;
  let fixture: ComponentFixture<ShowroomSendFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowroomSendFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowroomSendFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
