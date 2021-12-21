import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForestActionCreationFailureMessageComponent } from './forest-action-creation-failure-message.component';

describe('ForestActionCreationFailureMessageComponent', () => {
  let component: ForestActionCreationFailureMessageComponent;
  let fixture: ComponentFixture<ForestActionCreationFailureMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForestActionCreationFailureMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForestActionCreationFailureMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
