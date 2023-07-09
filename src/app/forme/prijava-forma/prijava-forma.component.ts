import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prijava-forma',
  templateUrl: './prijava-forma.component.html',
  styleUrls: ['./prijava-forma.component.css'],
})
export class PrijavaFormaComponent {
  prijavaForma: FormGroup;
  greska: boolean = false;

  constructor(
    private fb: FormBuilder,
    private as: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.prijavaForma = this.fb.group({
      korime: ['', [Validators.required]],
      lozinka: [
        '',
        [Validators.required, Validators.pattern('^[0-9A-Za-z]+$')],
      ],
    });
  }

  prijava(): void {
    const korime = this.prijavaForma.get('korime')?.value;
    const lozinka = this.prijavaForma.get('lozinka')?.value;
    this.as.prijava(korime, lozinka).subscribe((data) => {
      if (data) this.router.navigate(['/podesavanja']);
      else this.greska = true;
    });
  }
}
