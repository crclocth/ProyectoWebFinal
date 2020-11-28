import { TestBed } from '@angular/core/testing';

import { SugerenciasProviderService } from './sugerencias-provider.service';

describe('SugerenciasProviderService', () => {
  let service: SugerenciasProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SugerenciasProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
