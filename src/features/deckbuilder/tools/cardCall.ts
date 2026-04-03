import axios from "axios";
import { scryfallHeaders, scryfallHeaders2, scryfallUrl } from "../../../setup/consts.js";
import { sleep } from "./sleep.js";


export async function cardCall(filter:string) {
    try {
        filter = encodeURIComponent(filter);
        const baseUrl = scryfallUrl;
        const headers = scryfallHeaders2;

        const fullUrl = `${baseUrl}/cards/random?q=f%3Dcommander%20${filter}`;

        console.log(fullUrl);

        // jævla viktig
        await sleep(555);

        const apiRes = await axios.get(fullUrl, headers);

        // console.log(apiRes)

        return apiRes.data;

    } catch(err:any) {
        throw ({status:500, message:"Error in cardCall", err});
    }
}