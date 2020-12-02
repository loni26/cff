import { TestBed } from '@angular/core/testing';

import { SuggestionSearchService } from './suggestion-search.service';

describe('SuggestionSearchService', () => {
  let service: SuggestionSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuggestionSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
