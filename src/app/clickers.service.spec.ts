import { TestBed } from '@angular/core/testing';

import { ClickersService } from './clickers.service';

describe('ClickersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClickersService = TestBed.get(ClickersService);
    expect(service).toBeTruthy();
  });
});
