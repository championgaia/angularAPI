import { ContinentM } from '../models/continent-m';
import { PaysM } from '../models/pays-m';
import { RegionM } from '../models/region-m';
import { OffreM } from '../models/offre-m';

export class CatalogueM {
    ListeContinent: ContinentM[];
    ListePays: PaysM[];
    ListeRegion: RegionM[];
    ListeOffre: OffreM[];
}
