import Hero from "./hero.js"

let herois = [new Hero("Axel", 300), new Hero("Mandy", 2500), new Hero("Josuah", 5090)];
for (let i = 0; i<herois.length;i++){
    console.log(`O Heroi ${herois[i].heroName} está no nivel ${herois[i].getHeroLevel()}`)
}