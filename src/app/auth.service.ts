import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  prijavljen: boolean = false;
  url: string | null = null;

  prijava(korime: string, lozinka: string): Observable<boolean> {
    this.prijavljen = korime === 'admin' && lozinka === 'admin';
    localStorage.setItem('prijavljen', this.prijavljen ? 'true' : 'false');
    return of(this.prijavljen).pipe(
      delay(1000),
      tap((val) => {
        console.log(`Je uspesna prijava: ${val}`);
      })
    );
  }

  odjava(): void {
    this.prijavljen = false;
    localStorage.removeItem('prijavljen');
  }
}
