import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateGINComponent } from './generate-gin.component';

describe('GenerateGINComponent', () => {
  let component: GenerateGINComponent;
  let fixture: ComponentFixture<GenerateGINComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateGINComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateGINComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
