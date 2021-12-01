import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenGeneratorShowerComponent } from './token-generator-shower.component';

describe('TokenGeneratorShowerComponent', () => {
  let component: TokenGeneratorShowerComponent;
  let fixture: ComponentFixture<TokenGeneratorShowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenGeneratorShowerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenGeneratorShowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
