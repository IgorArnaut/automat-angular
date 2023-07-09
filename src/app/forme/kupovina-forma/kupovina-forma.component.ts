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
  kupovinaForma: FormGroup;
  artikal: Artikal;
  novac: number = 0;
  success = '';
  error = '';

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

  // Updates money in service, finds product by id from form and then updates it
  kupi(): void {
    this.as.novac += this.novac;
    this.novac = 0;

    const sifra: string = this.kupovinaForma.get('sifra')?.value;

    this.as.findBySifra(sifra).subscribe({
      next: (data: Artikal) => {
        console.log(data);
        this.artikal = data;
        console.log(this.artikal);
      },
      error: (err) => {
        console.log(err);
        this.error = err;
      },
    });

    this.as.update(this.artikal).subscribe({
      next: () => {
        this.success = 'Updated successfully';
      },
      error: (err) => {
        this.error = err;
      },
    });
  }
}
