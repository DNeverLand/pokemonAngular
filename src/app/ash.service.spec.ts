import { TestBed } from '@angular/core/testing';

import { AshService } from './ash.service';

describe('AshService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AshService = TestBed.get(AshService);
    expect(service).toBeTruthy();
  });
});
