// interface deck {
//     lands: number,
//     sorceries: number,
//     instants: number,
//     enchantments: number,
//     creatures: number

import { randomInt } from "./randomInt.js";


export function randomBalance(c:number) {

    let deckSize = {
        sorcery: randomInt(2, 12),
        instant: randomInt(2, 10),
        enchantment: randomInt(2, 10),
        artifact: randomInt(2, 10),
        creature: randomInt(20, 32),
        land: randomInt(7, 16) + c*c,
        basicLand: Math.floor(30/c + 2*c)
    }

    // let deckSize = {
    //     sorcery: 1,
    //     instant: 1,
    //     enchantment: 1,
    //     artifact: 1,
    //     creature: 1,
    //     land: 1,
    //     basicLand: 1
    // }

    return deckSize;
    
}