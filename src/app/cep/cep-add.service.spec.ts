import { TestBed } from '@angular/core/testing';

import { CepAddService } from './cep-add.service';

describe('CepAddService', () => {
  let service: CepAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CepAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
