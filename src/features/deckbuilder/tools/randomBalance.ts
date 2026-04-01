// interface deck {
//     lands: number,
//     sorceries: number,
//     instants: number,
//     enchantments: number,
//     creatures: number

// }
// funksjon for å velge tilfeldig heltall mellom min og max
export function getRandomInt(min:number, max:number):number {
    min = Math.ceil(min); // runder opp til heltall
    max = Math.floor(max); // runder ned til heltall
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomBalance(c:number) {
    // burde kanskje ha en generell inndeling av antall kort
    // hvis matten ikke går opp, tror jeg det kan være gøy å 
    // hente creatures av samma tribe som commandern for å fylle opp
    
    const basics = 0;
    const lands = 0;

    let deckSize = {
        sorcery: getRandomInt(2, 12),
        instant: getRandomInt(2, 11),
        enchantment: getRandomInt(2, 11),
        artifact: getRandomInt(2, 10),
        creature: getRandomInt(20, 35),
        land: getRandomInt(7, 16) + c*c,
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

    // console.log(deck);

    // let cardsToGo:number = 99;

    // const lands:number = getRandomInt(34, 40);

    return deckSize;



}