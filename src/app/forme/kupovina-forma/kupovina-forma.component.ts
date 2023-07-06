import { Component, OnInit } from '@angular/core';
import { Artikal } from '../../model/artikal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArtikalService } from '../../artikal.service';
import { map } from 'rxjs';

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
      sifra: ['', [Validators.required]],
      novac: ['', [Validators.required, Validators.min(10), Validators.max(200)]],
    });
  }

  public ubaciNovac(): void {
    const novac: number = this.kupovinaForma.get('novac')?.value;
    console.log(`novac ${novac}`);
    this.ubaceno += novac;
  }

  private plati(artikal: Artikal, sifra: string): void {
    if (artikal.sifra === sifra) {
      artikal.smanjiKolicinu();
      this.ubaceno -= artikal.cena;
      console.log(`ubaceno ${this.ubaceno}`);
    }
  }

  public kupi(): void {
    const sifra: string = this.kupovinaForma.get('sifra')?.value;
    console.log(`sifra: ${sifra}`)

    this.as.getArtikli().pipe(map(artikli => {
      const width: number = 9;
      const height:number = 6;

      for (let i: number = 0; i < height; i++) {
        for (let j: number = 0; j < width; j++)
          this.plati(artikli[i][j], sifra);
      }

      return artikli;
    }));
  }
}
