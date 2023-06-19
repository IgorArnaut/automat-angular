export class Artikal {
  public kolicina: number;

  constructor(public sifra: string, public naziv: string, public cena: number) {
    this.kolicina = 10;
  }

  postoji(): boolean {
    return this.kolicina > 0;
  }

  smanjiKolicinu(): void {
    this.kolicina--;
  }
}
