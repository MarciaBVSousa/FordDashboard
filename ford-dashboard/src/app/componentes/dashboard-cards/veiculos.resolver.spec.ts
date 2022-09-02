import { TestBed } from '@angular/core/testing';

import { VeiculosResolver } from './veiculos.resolver';

describe('VeiculosResolver', () => {
  let resolver: VeiculosResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(VeiculosResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
