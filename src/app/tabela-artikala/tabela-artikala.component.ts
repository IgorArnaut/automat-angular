import { Component, Input, OnInit } from '@angular/core';
import { Artikal } from '../model/artikal';
import { ArtikalService } from '../artikal.service';

@Component({
  selector: 'app-tabela-artikala',
  templateUrl: './tabela-artikala.component.html',
  styleUrls: ['./tabela-artikala.component.css'],
})
export class TabelaArtikalaComponent implements OnInit {
  public artikli: Artikal[][];
  public artikalClasses: { [key: string]: boolean };

  constructor(private as: ArtikalService) {}

  ngOnInit(): void {
    this.as.getArtikli().subscribe((artikli) => (this.artikli = artikli));
  }
}
