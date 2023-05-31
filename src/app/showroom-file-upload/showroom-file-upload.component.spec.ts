import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowroomFileUploadComponent } from './showroom-file-upload.component';

describe('ShowroomFileUploadComponent', () => {
  let component: ShowroomFileUploadComponent;
  let fixture: ComponentFixture<ShowroomFileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowroomFileUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowroomFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
