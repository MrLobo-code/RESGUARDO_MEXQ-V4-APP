import { TestBed } from '@angular/core/testing';

import { EquiposTableService } from './equipos-table.service';

describe('EquiposTableService', () => {
  let service: EquiposTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquiposTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
