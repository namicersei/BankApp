import { TestBed, inject } from '@angular/core/testing';

import { FetchbanksService } from './fetchbanks.service';

describe('FetchbanksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchbanksService]
    });
  });

  it('should be created', inject([FetchbanksService], (service: FetchbanksService) => {
    expect(service).toBeTruthy();
  }));
});
