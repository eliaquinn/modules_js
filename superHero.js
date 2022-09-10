// a class é o nosso contrutor
export default class SuperHero {
    constructor(n, p) {
        this.name = n
        this.power = p
    }
}
// a palavra reservada export serve para exportar funções para outros arquivos
export function printHeroName(hero) {
    console.log(`Superhero name is: ${hero.name}`)
}

export function printHeroPower(hero) {
    console.log(`Superhero power is: ${hero.power}`)
}