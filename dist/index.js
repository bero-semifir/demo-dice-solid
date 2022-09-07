"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import de la classe De
const De_1 = __importDefault(require("./des/De"));
// instance de la classe De avec 6 faces
const de1 = new De_1.default(6);
// j'affiche la valeur
console.log(de1.valeur);
// je lance le dé
de1.lancer();
// J'affiche la valeur aprés le lancer
console.log(de1.valeur);
