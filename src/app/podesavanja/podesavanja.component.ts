import { Component } from '@angular/core';
import { ArtikalService } from '../artikal.service';
import { Artikal } from '../model/artikal';

@Component({
  selector: 'app-podesavanja',
  templateUrl: './podesavanja.component.html',
  styleUrls: ['./podesavanja.component.css'],
})
export class PodesavanjaComponent {
  artikli: Artikal[];
  artikalClasses: { [key: string]: boolean };
  error: string = '';
  success: string = '';

  constructor(private as: ArtikalService) {}

  ngOnInit(): void {
    this.getArtikli();
  }

  getArtikli(): void {
    this.as.getAll().subscribe({
      next: (data: Artikal[]) => {
        this.artikli = data;
        this.success = 'Successful retrieval of the list';
      },
      error: (err) => {
        console.log(err);
        this.error = err;
      },
    });
  }

  dopuni(artikal: Artikal): void {
    console.log(artikal);
    artikal.kolicina = 10;
    console.log(artikal);
  }
}
