import { TestBed } from '@angular/core/testing';

import { VisitorProviderService } from './visitor-provider.service';

describe('VisitorProviderService', () => {
  let service: VisitorProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitorProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
