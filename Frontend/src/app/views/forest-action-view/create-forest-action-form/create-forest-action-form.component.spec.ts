import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateForestActionFormComponent } from './create-forest-action-form.component';

describe('CreateForestActionFormComponent', () => {
  let component: CreateForestActionFormComponent;
  let fixture: ComponentFixture<CreateForestActionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateForestActionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateForestActionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
