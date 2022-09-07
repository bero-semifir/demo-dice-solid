import { Lanceable } from "../interface/Lanceable";

class Piece implements Lanceable {
  protected _valeur: number = 1;

  lancer() {
    this.valeur = Math.ceil(Math.random() * 2);
  }

  public get valeur(): number {
    return this._valeur;
  }

  protected set valeur(newValeur: number) {
    this._valeur = newValeur;
  }
}

export default Piece;
