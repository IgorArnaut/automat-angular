import { Component, Input, OnInit } from '@angular/core';
import { Artikal } from '../model/artikal';

@Component({
  selector: 'app-tabela-artikala',
  templateUrl: './tabela-artikala.component.html',
  styleUrls: ['./tabela-artikala.component.css'],
})
export class TabelaArtikalaComponent implements OnInit {
  @Input() public artikli: Artikal[][];

  ngOnInit(): void {
    let width: number = 9;
    let height: number = 6;
    this.artikli = new Array(height);

    for (let i: number = 0; i < height; i++) {
      this.artikli[i] = new Array(width);

      for (let j: number = 0; j < width; j++) {
        const id: number = 10 * (i + 1) + j + 1;
        const count = i * width + j;
        this.artikli[i][j] = new Artikal(`${id}`, `Artikal ${count}`, 100);
      }
    }
  }
}
