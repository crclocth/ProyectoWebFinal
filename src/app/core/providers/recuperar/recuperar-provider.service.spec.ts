import { TestBed } from '@angular/core/testing';

import { RecuperarProviderService } from './recuperar-provider.service';

describe('RecuperarProviderService', () => {
  let service: RecuperarProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecuperarProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
