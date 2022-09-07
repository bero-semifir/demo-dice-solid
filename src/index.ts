// import de la classe De
import De from './des/De';
import Gobelet from './des/Gobelet';
import { Lanceable } from './interface/Lanceable';

// Bof: ranger les dés dans une boite à Dés
const boiteADe: De[] = [];

// Mieux: Ranger les dés dans un boite de Lanceable
// la boite à lanceable peut contenir tous les objets
// qui implémentent l'interface Lanceable
const boiteALanceable: Lanceable[] = [];

// instance de la classe De avec 6 faces
const de1: De = new De(6);
// const de2: De = new De(10);
// const de3: De = new De(12);
// const de4: De = new De(20);


for (let index = 0; index < 10; index++) {
    const de = new De(6);
    boiteADe.push(de);    
}

// utilisation du gobelet
// principe de substitution de Liskov
const gobelet: Gobelet = new Gobelet(boiteADe);
const gobeletLiskov: Gobelet = new Gobelet(boiteALanceable);

boiteADe.push(de1);
boiteALanceable.push(de1);

boiteADe.forEach((de) => de.lancer);

console.table(boiteADe)

// j'affiche la valeur
console.log(de1.valeur);

// je lance le dé
de1.lancer();

// J'affiche la valeur aprés le lancer
console.log(de1.valeur);

gobelet.lancer()

console.log(`Gobelet de ${boiteADe.length} dés`, gobelet.valeur);

gobeletLiskov.lancer();

console.log('Gobelet Liskov 1 seul dé', gobeletLiskov.valeur);
