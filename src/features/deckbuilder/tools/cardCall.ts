import axios from "axios";
import { scryfallHeaders, scryfallUrl } from "../../../setup/consts.js";

// https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(ms:number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function cardCall(filter:string) {
    try {
        filter = encodeURIComponent(filter);
        const baseUrl = scryfallUrl;
        const headers = scryfallHeaders;

        const fullUrl = `${baseUrl}/cards/random?q=f%3Dcommander%20${filter}`;

        // console.log(fullUrl);

        sleep(111);

        const apiRes = await axios.get(fullUrl, headers);

        // console.log(apiRes)

        return apiRes.data;

    } catch(err:any) {
        throw ({status:500, message:"Error in cardCall", err});
    }
}