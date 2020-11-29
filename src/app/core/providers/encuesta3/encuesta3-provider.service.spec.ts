import { TestBed } from '@angular/core/testing';

import { Encuesta3ProviderService } from './encuesta3-provider.service';

describe('Encuesta3ProviderService', () => {
  let service: Encuesta3ProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Encuesta3ProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
