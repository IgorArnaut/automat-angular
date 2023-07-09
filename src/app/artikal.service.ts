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

  public getAll(): Observable<Artikal[]> {
    return this.http.get<Artikal[]>(`${this.baseUrl}/list`);
  }

  public findBySifra(sifra: string) {
    const params = new HttpParams().set('sifra', sifra);

    return this.http.get<Artikal>(`${this.baseUrl}/find`, { params: params });
  }

  public update(artikal: Artikal) {
    return this.http.put(`${this.baseUrl}/update`, { data: artikal });
  }
}
