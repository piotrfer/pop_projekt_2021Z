import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignForestryShowerComponent } from './assign-forestry-shower.component';

describe('AssignForestryShowerComponent', () => {
  let component: AssignForestryShowerComponent;
  let fixture: ComponentFixture<AssignForestryShowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignForestryShowerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignForestryShowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
