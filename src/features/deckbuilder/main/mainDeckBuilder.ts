// Tanken er å ta valgte farger som input,
// eller en commander
// denne fila tror jeg blir den største, med kall på andre hjelpefunksjoner
// for innhenting av kort og sjekker osv

import { card, commander } from "../../../setup/types.js";
import { getCards } from "../card/getCards.js";
import { randomCommander } from "../commanderHandler/randomCommander.js";
import { randomBalance } from "../tools/randomBalance.js";
import { randomInt } from "../tools/randomInt.js";



export async function deckBuilder(colors:string[], commander?:card|false) {
    try {
        // henter en random ass commander
        if (!commander) {
            const edh = await randomCommander(colors);
            commander =  edh;
        }
        
        // setter farger hvis de mangler
        if (!colors.length) {
            colors = commander.colorIdentity;
        }


        // --- setting deck size
        let deckSize = randomBalance(colors.length);

        let count:number = 1;
        for (const [key, val] of Object.entries(deckSize)) {
            count = count + val;
        }
        // console.log("deckSize: ",count);
        // console.log(deckSize);
        // ---


        // --- filling deck
        let deck:card[] = [];
        deck.push(commander);

        for (const [key, value] of Object.entries(deckSize)) {
            let cards:any[] = [];
            cards = await getCards(colors, value, key);
            deck.push(...cards);
        }
        // ---


        // --- filler cards
        let slotsToFill:number = 100 - count;

        const a:string = commander.type.replace(/(Legendary)*(Creature)*(Planeswalker)*[^\w\s]*/gi,"");
        const b:string[] = a.trim().split(" ");
        const c:number = Math.ceil(slotsToFill/b.length);

        for (let i=0;b.length>i;i++) {
            let cards:any[] = [];
            cards = await getCards(colors, c, b[i]);
            deck = [...deck, ...cards];
        }

        // --- final card count + filling
        while (deck.length < 100) {
            slotsToFill = 100 - deck.length;
            let cards:any[] = [];
            cards = await getCards(colors, slotsToFill);
            // deck.push(...cards);
            deck = [...deck, ...cards];
        }
        // ---

        // --- trimming the deck down to 100 cards!!
        while (deck.length>100) {
            // removing random cards of index between 1 (0 is the edh guy) and length
            let rand = randomInt(1, deck.length);
            deck.splice(rand, 1);
        }
        // ---


        // --- better pastable format
        // let nameList:string[] = [];
        // for (let i=0; deck.length>i;i++) {
        //     let current = deck[i].name;
        //     nameList.push(current);
        // }
        // ---
        
        return {
            deckSize: deck.length,
            rawDeck: deck
        };

    } catch(err:any) {
        return {status: err.status || 500, message: err.message || "error in deckbuilder.ts"}
    }
}