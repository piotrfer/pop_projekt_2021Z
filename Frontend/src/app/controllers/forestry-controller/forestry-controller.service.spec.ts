import { TestBed } from '@angular/core/testing';

import { ForestryControllerService } from './forestry-controller.service';

describe('ForestryControllerService', () => {
  let service: ForestryControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForestryControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
