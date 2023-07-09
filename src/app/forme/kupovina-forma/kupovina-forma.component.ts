import { Component, OnInit } from '@angular/core';
import { Artikal } from '../../model/artikal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArtikalService } from '../../artikal.service';

@Component({
  selector: 'app-kupovina-forma',
  templateUrl: './kupovina-forma.component.html',
  styleUrls: ['./kupovina-forma.component.css'],
})
export class KupovinaFormaComponent implements OnInit {
  public kupovinaForma: FormGroup;
  public novac: number = 0;
  public success = '';
  public error = '';

  constructor(private fb: FormBuilder, private as: ArtikalService) {}

  ngOnInit(): void {
    this.kupovinaForma = this.fb.group({
      sifra: ['', [Validators.required]],
      novac: [
        '',
        [Validators.required, Validators.min(10), Validators.max(200)],
      ],
    });
  }

  ubaciNovac(): void {
    const novac: number = this.kupovinaForma.get('novac')?.value;
    console.log(`novac: ${novac}`);
    this.novac += novac;
  }

  private pronadji(sifra: string): Artikal {
    let artikal: Artikal = {
      sifra: '',
      naziv: '',
      cena: 0,
      kolicina: 0,
      slika: '',
    };

    this.as.findBySifra(sifra).subscribe({
      next: (res) => {
        artikal = res;
      },
      error: (err) => {
        console.log(err);
        this.error = err;
      },
    });

    console.log(artikal);
    return artikal;
  }

  kupi(): void {
    this.as.novac += this.novac;
    this.novac = 0;

    const sifra: string = this.kupovinaForma.get('sifra')?.value;
    console.log(`sifra: ${sifra}`);
    const artikal = this.pronadji(sifra);
    console.log(`sifra: ${artikal.sifra}`);

    /*
    this.as.update(artikal).subscribe({
      next: () => {
        this.success = 'Updated successfully';
      },
      error: (err) => {
        this.error = err;
      },
    });
    */
  }
}
