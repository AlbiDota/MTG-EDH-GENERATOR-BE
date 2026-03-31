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

        // let colorFilter = "-c:w-c:u-c:b-c:g-c:r"
        // let colorFilter = "-c:wubgr"
        let colorFilter = "c="
        // for (let i=0; colorIdentity.length>i;i++) {
        //     colorFilter = colorFilter.replace(`-c:${colorIdentity[i].toLowerCase()}`, "");
        // }
        // colorFilter = colorFilter.trim();
        
        for (let i=0; colorIdentity.length>i;i++) {
            // colorFilter += (`+c:${colorIdentity[i].toLowerCase()}`);
            colorFilter += (`${colorIdentity[i].toLowerCase()}`);
        }
        
        const fullUrl = `${baseUrl}/cards/random?q=is%3Acommander+${encodeURIComponent(colorFilter)}`

        let validityFlag:boolean = false;
        let card:commander;
        let i = 1;
        do {
            console.log(`forsøk nr: ${i}`)

            const scryfallRes:any = await axios.get(fullUrl,headers);
            card = await commanderCheck(scryfallRes.data.name);
            validityFlag=card.validCommander

            console.log(validityFlag);
            i++

            sleep(150);

        } while(validityFlag==false);

        return card;

    } catch(err:any) {
        throw ({message:"Error in fetchRandomCommander", err});
    }
}