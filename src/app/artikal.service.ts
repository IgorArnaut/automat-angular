import { Injectable } from '@angular/core';
import { Artikal } from './model/artikal';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArtikalService {
  private baseUrl: string = 'http://localhost/automat-php';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Artikal[]>(`${this.baseUrl}/list`);
  }
}
