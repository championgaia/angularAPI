import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OffreM } from '../models/offre-m';
import { Observable } from 'rxjs';
import { ContinentM } from '../models/continent-m';
import { PaysM } from '../models/pays-m';
import { RegionM } from '../models/region-m';
import { CatalogueM } from '../gestionCatalogue/catalogue-m';

@Injectable({
  providedIn: 'root'
})
export class GestionCatalogueService {
  url = 'http://localhost:64915/Api/';
  constructor(private http: HttpClient) { } 
  getCatalogue(idContinent: number, idPays: number, idRegion: number, idOffre: number):Observable<CatalogueM> {  
    return this.http.get<CatalogueM>(this.url +'Catalogue' + '?idContinent=' + idContinent + '&idPays=' + idPays + '&idRegion=' + idRegion + '&idOffre=' + idOffre);
  }
  getContinent(idContinent: number):Observable<ContinentM[]> {  
    return this.http.get<ContinentM[]>(this.url +'Continent'  + '?idContinent=' + idContinent);
  }
  getPays(idContinent: number):Observable<PaysM[]> {  
    return this.http.get<PaysM[]>(this.url +'Pays'  + '?idContinent=' + idContinent);
  }
  getRegion(idContinent: number, idPays: number):Observable<RegionM[]> {  
    return this.http.get<RegionM[]>(this.url +'Region' + '?idContinent=' + idContinent + '&idPays=' + idPays);
  }
  getOffre(idContinent: number, idPays: number, idRegion: number, idOffre: number):Observable<OffreM[]> {  
    return this.http.get<OffreM[]>(this.url +'Offre' + '?idContinent=' + idContinent + '&idPays=' + idPays + '&idRegion=' + idRegion + '&idOffre=' + idOffre);
  }
}
