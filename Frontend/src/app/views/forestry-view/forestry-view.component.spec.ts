import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForestryViewComponent } from './forestry-view.component';

describe('ForestryViewComponent', () => {
  let component: ForestryViewComponent;
  let fixture: ComponentFixture<ForestryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForestryViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForestryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
