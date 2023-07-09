import { Component } from '@angular/core';
import { Artikal } from '../model/artikal';
import { ArtikalService } from '../artikal.service';

@Component({
  selector: 'app-podesavanja',
  templateUrl: './podesavanja.component.html',
  styleUrls: ['./podesavanja.component.css'],
})
export class PodesavanjaComponent {
  public artikli: Artikal[];
  public artikalClasses: { [key: string]: boolean };
  public error: string = '';
  public success: string = '';

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
}
