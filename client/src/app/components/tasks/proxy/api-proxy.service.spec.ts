import { TestBed, inject } from '@angular/core/testing';

import { ApiProxyService } from './api-proxy.service';

describe('ApiProxyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiProxyService]
    });
  });

  it('should be created', inject([ApiProxyService], (service: ApiProxyService) => {
    expect(service).toBeTruthy();
  }));
});
