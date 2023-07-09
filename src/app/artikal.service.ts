import { Injectable } from '@angular/core';
import { Artikal } from './model/artikal';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArtikalService {
  private baseUrl: string = 'http://localhost/automat-php';
  novac: number = 0;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Artikal[]> {
    return this.http.get<Artikal[]>(`${this.baseUrl}/list`);
  }

  // Finds product by its id
  findBySifra(sifra: string): Observable<Artikal> {
    const params = new HttpParams().set('sifra', sifra);

    return this.http.get<Artikal>(`${this.baseUrl}/find`, { params: params });
  }

  // Updates amount of product
  update(artikal: Artikal) {
    artikal.kolicina = artikal.kolicina - 1 > 0 ? artikal.kolicina - 1 : 0;
    return this.http.put(`${this.baseUrl}/update`, { data: artikal });
  }
}
