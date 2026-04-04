import { cardLib } from "../../../setup/librarySetup.js";
import { card } from "../../../setup/types.js";
import { cardMapper } from "../tools/cardMapper.js";
import { randomInt } from "../tools/randomInt.js";


export async function getCards(colors:string[], amount:number, cardType?:string):Promise<card[]> {
    if (cardType== "basicLand") cardType = "basic land";

    const library:any[] = (await cardLib.getInstance()).library;


    const validColors = colors.join("");
    const regex1:RegExp = new RegExp(`[^${validColors}]`);

    let validCards:any[] = library.filter((card:any) => {
        const id:string = (card.color_identity.length?card.color_identity.join(""):"C");
        return !regex1.test(id);
    });


    if (cardType) {
        const regex2:RegExp = new RegExp(`${cardType}`, "i");
        // const regex2:RegExp =/\b(sorcery|instant|enchantment|artifact|creature|land|basic land)\b/i
        validCards = validCards.filter((card:any) => 

            {return regex2.test(card.type_line)}

        );
    }


    let deck:card[] = [];
    for (let i=0;amount>i;i++) {
        let legal:boolean = false
        let int:number;
        do{
            int = randomInt(0,validCards.length-1);
            if (validCards[int].legalities.commander == "legal") {
                legal = true
            }
        } while (!legal)
        
        const card:card = cardMapper(validCards[int]);
        deck.push(card);

        // hvis kortet er lagt til, kan vi jo bare fjerne den fra der vi plukker xd
        // så enkel løsning for så mye grubling ..
        // basic lands ska fortsatt bli igjen, så er det eneste vi trenger
        // å tenke på :D
        if (!validCards[int].type_line.toLowerCase().includes("basic land")) {
            // fjerner ett kort på slotten til valgt kort.
            validCards.splice(int, 1);
        }

    }


    return deck;
}