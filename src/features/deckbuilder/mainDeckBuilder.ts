// Tanken er å ta valgte farger som input,
// eller en commander
// denne fila tror jeg blir den største, med kall på andre hjelpefunksjoner
// for innhenting av kort og sjekker osv

import { fetchRandomCommander } from "./tools/fetchRandomCommander.js";
import { randomBalance } from "./tools/randomBalance.js";


export async function deckBuilder(colors:string[], commander?:any) {
    try {
        // henter en random ass commander
        if (!commander) {
            console.log("bazinga")
            commander = await fetchRandomCommander(colors);
        }

        let deck = randomBalance();

        console.log(deck)



        return commander;

    } catch(err:any) {
        return {message: err.message || "error in deckbuilder.ts"}
    }
}