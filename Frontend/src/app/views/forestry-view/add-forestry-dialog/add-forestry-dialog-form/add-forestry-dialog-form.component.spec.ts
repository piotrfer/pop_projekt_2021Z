import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddForestryDialogFormComponent } from './add-forestry-dialog-form.component';

describe('AddForestryDialogFormComponent', () => {
  let component: AddForestryDialogFormComponent;
  let fixture: ComponentFixture<AddForestryDialogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddForestryDialogFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddForestryDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
