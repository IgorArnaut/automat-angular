import { Component, Input } from '@angular/core';
import { Artikal } from '../model/artikal';

@Component({
  selector: 'app-artikal',
  templateUrl: './artikal.component.html',
  styleUrls: ['./artikal.component.css'],
})
export class ArtikalComponent {
  @Input() public artikal: Artikal;
}
