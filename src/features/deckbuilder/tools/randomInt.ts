// funksjon for å velge tilfeldig heltall mellom min og max
export function randomInt(min:number, max:number):number {
    min = Math.ceil(min); // runder opp til heltall
    max = Math.floor(max); // runder ned til heltall
    return Math.floor(Math.random() * (max - min + 1)) + min;
}