import { Component, OnInit } from '@angular/core';
import { Artikal } from '../model/artikal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-kupovina-forma',
  templateUrl: './kupovina-forma.component.html',
  styleUrls: ['./kupovina-forma.component.css'],
})
export class KupovinaFormaComponent implements OnInit {
  public kupovinaForma: FormGroup;
  public izabrani: number[];
  public ubaceno: number = 0;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.kupovinaForma = this.fb.group({
      sifra: [Validators.required],
      novac: [Validators.required, Validators.min(10), Validators.max(200)],
    });
  }

  public ubaciNovac(): void {
    let novac: number = this.kupovinaForma.get('novac')?.value;
    this.ubaceno += novac;
  }

  public unesiSifru(): void {
    let sifra: number = this.kupovinaForma.get('sifra')?.value;
    this.izabrani.push(sifra);
  }
}
