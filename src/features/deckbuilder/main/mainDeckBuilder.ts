// Tanken er å ta valgte farger som input,
// eller en commander
// denne fila tror jeg blir den største, med kall på andre hjelpefunksjoner
// for innhenting av kort og sjekker osv

import { fetchRandomCommander } from "../commanderHandler/fetchRandomCommander.js";
import { randomBalance } from "../tools/randomBalance.js";


export async function deckBuilder(colors:string[], commander?:any) {
    try {
        // henter en random ass commander
        if (!commander) {
            console.log("bazinga")
            commander = await fetchRandomCommander(colors);
        }

        let deckSize = randomBalance();

        console.log(deckSize);



        return commander;

    } catch(err:any) {
        return {message: err.message || "error in deckbuilder.ts"}
    }
}