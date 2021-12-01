import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateButtonContainerComponent } from './generate-button-container.component';

describe('GenerateButtonContainerComponent', () => {
  let component: GenerateButtonContainerComponent;
  let fixture: ComponentFixture<GenerateButtonContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateButtonContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateButtonContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
