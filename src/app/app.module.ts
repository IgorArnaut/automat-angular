import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TabelaArtikalaComponent } from './tabela-artikala/tabela-artikala.component';
import { KupovinaFormaComponent } from './forme/kupovina-forma/kupovina-forma.component';
import { PrijavaFormaComponent } from './forme/prijava-forma/prijava-forma.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArtikalComponent } from './artikal/artikal.component';
import { HttpClientModule } from '@angular/common/http';
import { PodesavanjaComponent } from './podesavanja/podesavanja.component';

@NgModule({
  declarations: [
    AppComponent,
    TabelaArtikalaComponent,
    KupovinaFormaComponent,
    PrijavaFormaComponent,
    NavbarComponent,
    ArtikalComponent,
    PodesavanjaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
