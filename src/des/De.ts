import { Lanceable } from "../interface/Lanceable";

class De implements Lanceable {
    protected nombreFace: number;
    protected _valeur: number = 0;

    constructor(nombreFace: number) {
        this.nombreFace = nombreFace;
        this.lancer();
    }

    public lancer(): void {
        this.valeur = Math.ceil(Math.random() * this.nombreFace);
    }

    public get valeur(): number {
        return this._valeur;
    }

    protected set valeur(newVal: number) {
        // On pourrait vérifier si newVal est un entier mais ce n'est pas necessaire
        // car seul lancer appelle le setter
        // -> YAGNI: You Ain't Gonna Need It!
        if(newVal < 1 || newVal > 6) {
            throw new Error("Le dé doit avoir une valeur entre 1 et 6 inclus");
        }
        this._valeur = newVal;
    }
}

export default De;
