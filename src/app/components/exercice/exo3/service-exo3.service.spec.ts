import { TestBed } from '@angular/core/testing';

import { ServiceExo3Service } from './service-exo3.service';

describe('ServiceExo3Service', () => {
  let service: ServiceExo3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceExo3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
