import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { GestionCatalogueService } from './services/gestion-catalogue.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [HttpClientModule, GestionCatalogueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
