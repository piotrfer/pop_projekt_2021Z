import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignForestryDialogComponent } from './assign-forestry-dialog.component';

describe('AssignForestryDialogComponent', () => {
  let component: AssignForestryDialogComponent;
  let fixture: ComponentFixture<AssignForestryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignForestryDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignForestryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
