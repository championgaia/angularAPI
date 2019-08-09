import { Component, SimpleChanges } from '@angular/core';
import { OffreM } from './models/offre-m';

import { Observable } from 'rxjs';
import { ContinentM } from './models/continent-m';
import { GestionCatalogue } from './gestionCatalogue/gestion-catalogue';
import { PaysM } from './models/pays-m';
import { RegionM } from './models/region-m';
import { CatalogueM } from './gestionCatalogue/catalogue-m';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GestionCatalogue]
})
export class AppComponent {
  title = 'my-app';
  name = 'VHN';
  _myTable = ['A', 'B', 'C', 'D'];
  _monCatalogue:  CatalogueM = new CatalogueM();
  _currentContinent: number =0;
  _currentPays: number =0;
  _currentRegion: number =0;
  _currentOffre: number =0;
  /**
   *
   */
  constructor(private _gestionCat : GestionCatalogue) {
      
  }
  ngOnInit(): void {
    this.bindingDdl(this._currentContinent, this._currentPays, this._currentRegion, this._currentOffre);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  bindingDdl(idContinent: number, idPays: number, idRegion: number, idOffre: number){
    this._gestionCat.getCatalogue(idContinent, idPays, idRegion, idOffre).subscribe(data=>{
      this._monCatalogue =  data as CatalogueM;
    });
  }
  onChangeContinentDdl(event){
    this._currentContinent = event.target.value;
    console.log(this._currentContinent);
    this.bindingDdl(this._currentContinent, this._currentPays, this._currentRegion, this._currentOffre);
    let element = document.getElementById('continent'+this._currentContinent);
    console.log(element);
    element.focus();
  }
  onChangePaysDdl(event){
    this._currentPays = event.target.value;
    this.bindingDdl(this._currentContinent, this._currentPays, this._currentRegion, this._currentOffre);
  }
  onChangeRegionDdl(event){
    this._currentRegion = event.target.value;
    this.bindingDdl(this._currentContinent, this._currentPays, this._currentRegion, this._currentOffre);
  }
  onChangeOffreDdl(event){
    this._currentOffre = event.target.value;
    this.bindingDdl(this._currentContinent, this._currentPays, this._currentRegion, this._currentOffre);
    console.log(event.target.value);
  }
  onChange(event: { target: { value: string; }; }){
    document.getElementById('cbNumeroClient').innerHTML = "";
    document.getElementById('mixClient').innerHTML = "";
    for (const iterator of this._myTable) {
    document.getElementById('cbNumeroClient').innerHTML +='<option> '+iterator+'</option>';
    document.getElementById('mixClient').innerHTML +='<option> '+event.target.value+iterator+'</option>';
    }
  }
}
