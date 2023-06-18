export class Artikal {
  public kolicina: 10;

  constructor(
    public sifra: string,
    public naziv: string,
    public cena: number
  ) {}

  smanjiKolicinu(): void {
    this.kolicina--;
  }
}
