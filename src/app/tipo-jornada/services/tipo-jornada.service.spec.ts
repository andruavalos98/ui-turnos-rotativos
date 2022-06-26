import { TestBed } from '@angular/core/testing';

import { TipoJornadaService } from './tipo-jornada.service';

describe('TipoJornadaService', () => {
  let service: TipoJornadaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoJornadaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
