import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorWindowComponent } from './sensor-window.component';

describe(' SensorWindowComponent', () => {
  let component: SensorWindowComponent;
  let fixture: ComponentFixture< SensorWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [  SensorWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent( SensorWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
