import { Injectable } from '@angular/core';
import { Artikal } from './model/artikal';
import { ARTIKLI } from './artikli';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArtikalService {
  constructor() {}

  getArtikli(): Observable<Artikal[][]> {
    return of(ARTIKLI);
  }
}
