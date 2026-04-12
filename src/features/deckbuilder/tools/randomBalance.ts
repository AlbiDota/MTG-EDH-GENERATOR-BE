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
        creature: randomInt(7, 15), //den her er lav, fordi vi henter tribals når vi fyller opp
        land: randomInt(5, 12) + Math.floor(c*(c+2)),
        basicLand: randomInt(35, 40) - Math.ceil(c*(c+1))
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