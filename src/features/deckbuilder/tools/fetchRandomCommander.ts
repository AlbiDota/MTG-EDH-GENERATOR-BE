import axios from "axios";
import { scryfallHeaders, scryfallUrl } from "../../../setup/consts";
import { commanderCheck } from "./commanderValidator";


export async function fetchRandomCommander(colorIdentity:string[]) {
    try {
        const baseUrl = scryfallUrl;
        const headers = scryfallHeaders;

        const fullUrl = `${baseUrl}/cards/random?q=is%3Acommander`

        // let scryfallRes:any = await axios.get(fullUrl,headers);

        // const check = await commanderCheck(scryfallRes);

        // if (!check.validCommander)
        //     return;

        let validityFlag:boolean = false;
        do {
            const scryfallRes:any = await axios.get(fullUrl,headers);
            const check = await commanderCheck(scryfallRes);
            validityFlag=check.validCommander

        } while(validityFlag==false);

    } catch(err:any) {
        throw ({message:"Error in fetchRandomCommander", err});
    }
}