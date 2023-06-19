import { Artikal } from './model/artikal';

let ARTIKLI: Artikal[][];
let width: number = 9;
let height: number = 6;
ARTIKLI = new Array(height);

for (let i: number = 0; i < height; i++) {
  ARTIKLI[i] = new Array(width);

  for (let j: number = 0; j < width; j++) {
    const id: number = 10 * (i + 1) + j + 1;
    const count = i * width + j;
    ARTIKLI[i][j] = new Artikal(`${id}`, `Artikal ${count}`, 100);
  }
}

export { ARTIKLI };
