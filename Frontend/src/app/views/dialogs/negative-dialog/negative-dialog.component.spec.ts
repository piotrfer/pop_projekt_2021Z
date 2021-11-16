import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegativeDialogComponent } from './negative-dialog.component';

describe('NegativeDialogComponent', () => {
  let component: NegativeDialogComponent;
  let fixture: ComponentFixture<NegativeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NegativeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NegativeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
