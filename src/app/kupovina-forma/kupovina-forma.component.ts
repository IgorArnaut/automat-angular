import { Component, OnInit } from '@angular/core';
import { Artikal } from '../model/artikal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArtikalService } from '../artikal.service';

@Component({
  selector: 'app-kupovina-forma',
  templateUrl: './kupovina-forma.component.html',
  styleUrls: ['./kupovina-forma.component.css'],
})
export class KupovinaFormaComponent implements OnInit {
  public kupovinaForma: FormGroup;
  public ubaceno: number = 0;

  constructor(private fb: FormBuilder, private as: ArtikalService) {}

  ngOnInit(): void {
    this.kupovinaForma = this.fb.group({
      sifra: ['', Validators.required],
      novac: ['', Validators.required, Validators.min(10), Validators.max(200)],
    });
  }

  public ubaciNovac(): void {
    let novac: number = this.kupovinaForma.get('novac')?.value;
    this.ubaceno += novac;
  }

  private plati(artikal: Artikal, sifra: string): void {
    if (artikal.sifra === sifra) {
      artikal.smanjiKolicinu();
      this.ubaceno -= artikal.cena;
    }
  }

  public kupi(): void {
    let sifra: string = this.kupovinaForma.get('sifra')?.value;

    this.as.getArtikli().subscribe((artikli) => {
      let width: number = 9;
      let height: number = 6;

      for (let i: number = 0; i < height; i++) {
        for (let j: number = 0; j < width; j++) {
          this.plati(artikli[i][j], sifra);
        }
      }
    });
  }
}
