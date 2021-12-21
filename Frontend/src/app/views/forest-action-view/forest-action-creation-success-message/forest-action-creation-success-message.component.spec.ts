import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForestActionCreationSuccessMessageComponent } from './forest-action-creation-success-message.component';

describe('ForestActionCreationSuccessMessageComponent', () => {
  let component: ForestActionCreationSuccessMessageComponent;
  let fixture: ComponentFixture<ForestActionCreationSuccessMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForestActionCreationSuccessMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForestActionCreationSuccessMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
