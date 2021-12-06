import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoForestriesModalComponent } from './no-forestries-modal.component';

describe('NoForestriesModalComponent', () => {
  let component: NoForestriesModalComponent;
  let fixture: ComponentFixture<NoForestriesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoForestriesModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoForestriesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
