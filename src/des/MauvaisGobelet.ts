import { Lanceable } from "../interface/Lanceable";
import De from "./De";

class Gobelet implements Lanceable {
  protected _valeur: number = 0;

  protected contenu: De[] = [];

  constructor(nombreDe: number) {
    for (let index = 0; index < nombreDe; index++) {
        this.contenu.push(new De(6));
    }
  }

  lancer(): void {
    this.valeur = 0;
    this.contenu.forEach((de: De) => {
      de.lancer();
      this.valeur += de.valeur;
    });
  }

  public get valeur(): number {
    return this._valeur;
  }

  protected set valeur(newValeur: number) {
    this._valeur = newValeur;
  }
}

export default Gobelet;
