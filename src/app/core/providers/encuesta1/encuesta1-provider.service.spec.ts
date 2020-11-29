import { TestBed } from '@angular/core/testing';

import { Encuesta1ProviderService } from './encuesta1-provider.service';

describe('Encuesta1ProviderService', () => {
  let service: Encuesta1ProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Encuesta1ProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
