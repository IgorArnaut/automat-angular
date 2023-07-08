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
  public error: string = '';
  public success: string = '';

  constructor(private as: ArtikalService) {}

  ngOnInit(): void {
    this.getArtikli();
  }

  getArtikli(): void {
    const width: number = 9;
    const height: number = 6;

    this.as.getAll().subscribe({
      next: (data: Artikal[]) => {
        this.artikli = [];

        for (let i: number = 0; i < height; i++) {
          this.artikli[i] = [];

          for (let j: number = 0; j < width; j++) {
            let artikal = data[i * width + j];
            this.artikli[i][j] = new Artikal(
              artikal.sifra,
              artikal.naziv,
              artikal.cena,
              artikal.kolicina,
              artikal.slika
            );
          }
        }

        this.success = 'Successful retrieval of the list';
      },
      error: (err) => {
        console.log(err);
        this.error = err;
      },
    });
  }
}
