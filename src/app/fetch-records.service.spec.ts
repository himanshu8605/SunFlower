import { TestBed } from '@angular/core/testing';

import { FetchRecordsService } from './fetch-records.service';

describe('FetchRecordsService', () => {
  let service: FetchRecordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchRecordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
