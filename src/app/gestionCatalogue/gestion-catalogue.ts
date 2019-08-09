import { OffreM } from '../models/offre-m';
import { Observable } from 'rxjs';
import { GestionCatalogueService } from '../services/gestion-catalogue.service';
import { ContinentM } from '../models/continent-m';
import { PaysM } from '../models/pays-m';
import { RegionM } from '../models/region-m';
import { CatalogueM } from './catalogue-m';

export class GestionCatalogue {
    /**
     *
     */
    constructor(private gestionService : GestionCatalogueService ) {}
    getCatalogue(idContinent: number, idPays: number, idRegion: number, idOffre: number):Observable<CatalogueM>{
        return this.gestionService.getCatalogue(idContinent, idPays, idRegion, idOffre);
    }
    getContinent(idContinent: number):Observable<ContinentM[]>{
        return this.gestionService.getContinent(idContinent);
    }
    getPays(idContinent: number):Observable<PaysM[]>{
        return this.gestionService.getPays(idContinent);
    }
    getRegion(idContinent: number, idPays: number):Observable<RegionM[]>{
        return this.gestionService.getRegion(idContinent, idPays);
    }
    getOffre(idContinent: number, idPays: number, idRegion: number, idOffre: number):Observable<OffreM[]>{
        return this.gestionService.getOffre(idContinent, idPays, idRegion, idOffre);
    }
}