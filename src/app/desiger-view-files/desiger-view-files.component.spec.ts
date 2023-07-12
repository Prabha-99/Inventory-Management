import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesigerViewFilesComponent } from './desiger-view-files.component';

describe('DesigerViewFilesComponent', () => {
  let component: DesigerViewFilesComponent;
  let fixture: ComponentFixture<DesigerViewFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesigerViewFilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesigerViewFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
