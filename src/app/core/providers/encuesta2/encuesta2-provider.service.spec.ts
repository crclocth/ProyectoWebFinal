import { TestBed } from '@angular/core/testing';

import { Encuesta2ProviderService } from './encuesta2-provider.service';

describe('Encuesta2ProviderService', () => {
  let service: Encuesta2ProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Encuesta2ProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
