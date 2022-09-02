import { TestBed } from '@angular/core/testing';

import { VerificaVinExistenteService } from './verifica-vin-existente.service';

describe('VerificaVinExistenteService', () => {
  let service: VerificaVinExistenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerificaVinExistenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
