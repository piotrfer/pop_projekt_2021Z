import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoForestriesMessageComponent } from './no-forestries-message.component';

describe('NoForestriesMessageComponent', () => {
  let component: NoForestriesMessageComponent;
  let fixture: ComponentFixture<NoForestriesMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoForestriesMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoForestriesMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
