import { TestBed } from '@angular/core/testing';

import { ConsumoAPIService } from './consumo-api.service';

describe('ConsumoAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsumoAPIService = TestBed.get(ConsumoAPIService);
    expect(service).toBeTruthy();
  });
});
