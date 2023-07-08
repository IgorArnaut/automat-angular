export class Artikal {
  constructor(
    public sifra: string,
    public naziv: string,
    public cena: number,
    public kolicina: number,
    public slika: string
  ) {}

  postoji(): boolean {
    return this.kolicina > 0;
  }

  smanjiKolicinu(): void {
    this.kolicina--;
  }
}
