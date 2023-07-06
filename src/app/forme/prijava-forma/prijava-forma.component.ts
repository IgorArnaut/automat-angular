import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-prijava-forma',
  templateUrl: './prijava-forma.component.html',
  styleUrls: ['./prijava-forma.component.css'],
})
export class PrijavaFormaComponent {
  public prijavaForma: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.prijavaForma = this.fb.group({
      korime: ['', Validators.required],
      lozinka: ['', Validators.required, Validators.pattern('^[0-9A-Za-z]+$')],
    });
  }
}
