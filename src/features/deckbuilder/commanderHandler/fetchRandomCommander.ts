import axios from "axios";
import { scryfallHeaders, scryfallUrl } from "../../../setup/consts.js";
import { commanderCheck } from "./commanderValidator.js";
import { commander } from "../../../setup/types.js";

// https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(ms:number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function fetchRandomCommander(colorIdentity:string[]) {
    try {
        const baseUrl = scryfallUrl;
        const headers = scryfallHeaders;

        // let colorFilter = "-id:w -id:u -id:b -id:r -id:g";
        // let colorFilter = "-c:wubgr"
        let colorFilter = "id=";
        // for (let i=0; colorIdentity.length>i;i++) {
        //     colorFilter = colorFilter.replace(`-c:${colorIdentity[i].toLowerCase()}`, "");
        // }
        // colorFilter = colorFilter.trim();
        
        for (let i=0; colorIdentity.length>i;i++) {
            // colorFilter += (`+c:${colorIdentity[i].toLowerCase()}`);
            colorFilter += (`${colorIdentity[i].toLowerCase()}`);
        }

        const fullUrl = `${baseUrl}/cards/random?q=is%3Acommander+${encodeURIComponent(colorFilter)}`

        console.log(fullUrl);

        let validityFlag:boolean = false;
        let card:commander;
        let i = 1;
        do {
            console.log(`forsøk nr: ${i}`)

            const scryfallRes:any = await axios.get(fullUrl,headers); 
            console.log(scryfallRes.data.name)
            card = await commanderCheck(scryfallRes.data.name);
            validityFlag = card.validCommander

            console.log(validityFlag);
            console.log("-");
            i++

            sleep(200);

        } while(validityFlag==false);

        return card;

    } catch(err:any) {
        throw ({status:500, message:"Error in fetchRandomCommander", err});
    }
}