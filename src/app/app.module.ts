import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabelaArtikalaComponent } from './tabela-artikala/tabela-artikala.component';
import { KupovinaFormaComponent } from './kupovina-forma/kupovina-forma.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ArtikalComponent } from './artikal/artikal.component';

@NgModule({
  declarations: [AppComponent, TabelaArtikalaComponent, KupovinaFormaComponent, ArtikalComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
