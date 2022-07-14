import { TestBed } from '@angular/core/testing';

import { AkuServiceService } from './aku-service.service';

describe('AkuServiceService', () => {
  let service: AkuServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AkuServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
