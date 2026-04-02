import { cardCall } from "../tools/cardCall.js";
import { sleep } from "../tools/sleep.js";


export async function getCards(colors:string[], amount:number, cardType?: string) {
    try {
        if (cardType == "basicLand") {
            cardType = "basic land";
        }

        // let queryFilter = "-id:w -id:u -id:b -id:r -id:g id<=";
        let queryFilter = "id<=";

        for (let i=0; colors.length>i;i++) {
            queryFilter = queryFilter.replace(`-id:${colors[i]}`,"");
            queryFilter+=`${colors[i]}`;
        }

        if (cardType) {
            queryFilter +=  ` t="${cardType}"`;
        }

        
        
        console.log(queryFilter);
        let cards:any = [];
        for (let i=0;amount>i;i++) {
            let card = await cardCall(queryFilter);
            cards.push(card);
            await sleep(200);
        }

        return cards;

    } catch(err:any) {
        throw ({status:500, message:"Error in getCards", err});
    }
}