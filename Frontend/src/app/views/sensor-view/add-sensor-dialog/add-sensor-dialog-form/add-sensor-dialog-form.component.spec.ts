import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSensorDialogFormComponent } from './add-sensor-dialog-form.component';

describe('AddSensorDialogFormComponent', () => {
  let component: AddSensorDialogFormComponent;
  let fixture: ComponentFixture<AddSensorDialogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSensorDialogFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSensorDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
