import { TestBed } from '@angular/core/testing';

import { GestionCatalogueService } from './gestion-catalogue.service';

describe('GestionCatalogueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GestionCatalogueService = TestBed.get(GestionCatalogueService);
    expect(service).toBeTruthy();
  });
});
