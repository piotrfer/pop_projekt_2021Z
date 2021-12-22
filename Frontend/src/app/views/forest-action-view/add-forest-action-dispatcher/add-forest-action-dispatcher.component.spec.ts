import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddForestActionDispatcherComponent } from './add-forest-action-dispatcher.component';

describe('AddForestActionDispatcherComponent', () => {
  let component: AddForestActionDispatcherComponent;
  let fixture: ComponentFixture<AddForestActionDispatcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddForestActionDispatcherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddForestActionDispatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
