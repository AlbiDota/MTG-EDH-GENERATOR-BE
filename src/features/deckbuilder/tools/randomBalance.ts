// interface deck {
//     lands: number,
//     sorceries: number,
//     instants: number,
//     enchantments: number,
//     creatures: number

// }
// funksjon for å velge tilfeldig heltall mellom min og max
function getRandomInt(min:number, max:number):number {
    min = Math.ceil(min); // runder opp til heltall
    max = Math.floor(max); // runder ned til heltall
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomBalance() {
    // burde kanskje ha en generell inndeling av antall kort

    // let deck = {
    //     lands: getRandomInt(34, 39),
    //     sorceries: getRandomInt(2, 10),
    //     instants: getRandomInt(2, 10),
    //     enchantments: getRandomInt(1, 10),
    //     artifacts: getRandomInt(0, 10),
    //     creatures: getRandomInt(14, 30)
    // }

    // let cardsToGo:number = 99;

    // const lands:number = getRandomInt(34, 40);

    return {}



}