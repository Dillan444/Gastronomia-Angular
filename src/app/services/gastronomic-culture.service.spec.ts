import { TestBed } from '@angular/core/testing';

import { GastronomicCultureService } from './gastronomic-culture.service';

describe('GastronomicCultureService', () => {
  let service: GastronomicCultureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GastronomicCultureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
