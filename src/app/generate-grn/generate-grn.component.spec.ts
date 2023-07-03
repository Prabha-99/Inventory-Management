import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateGRNComponent } from './generate-grn.component';

describe('GenerateGRNComponent', () => {
  let component: GenerateGRNComponent;
  let fixture: ComponentFixture<GenerateGRNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateGRNComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateGRNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
