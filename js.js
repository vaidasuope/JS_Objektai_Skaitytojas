"use strict"
//Namu darbas Skaitytojas

class Skaitytojas {
    constructor(vardas, pavarde, kortelesNr, adresas, telNr) {
        this.vardas = vardas;
        this.pavarde = pavarde;
        this.kortelesNr = kortelesNr;
        this.adresas = adresas;
        this.telNr = telNr;
        this.paimtosKnygos = [];
    }
    imuKmygas(knygos) {
        this.paimtosKnygos.push(knygos);
        return this.paimtosKnygos;
    }
}

let pirmas = new Skaitytojas("Vaida", "Paida", "123356", "Uzliedziai, Kauno raj.", "862299662");

pirmas.imuKmygas("Knyga1");
pirmas.imuKmygas("Knyga2");
pirmas.imuKmygas("Knyga3");
// console.log(pirmas.paimtosKnygos);
// console.log(pirmas);

for (let pirmiDuomenys in pirmas) {
    if (typeof pirmiDuomenys != "object") {
        console.log(`${pirmiDuomenys} : ${pirmas[pirmiDuomenys]}`);
    }
}

let antras = new Skaitytojas("Tomas", "Domas", "225357", "Kaunas", "869277667");

antras.imuKmygas("Knyga1");
antras.imuKmygas("Knyga2");
antras.imuKmygas("Knyga3");
antras.imuKmygas("Knyga4");
// console.log(antras.paimtosKnygos);

console.log("\n");
for (let pirmiDuomenys in antras) {
    if (typeof pirmiDuomenys != "object") {
        console.log(`${pirmiDuomenys} : ${antras[pirmiDuomenys]}`);
    }
}
