import { TestBed } from '@angular/core/testing';

import { ServicioEjercicioService } from './servicio-ejercicio.service';

describe('ServicioEjercicioService', () => {
  let service: ServicioEjercicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioEjercicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
