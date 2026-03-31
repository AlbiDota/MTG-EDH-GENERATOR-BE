import axios from "axios";
import { scryfallHeaders, scryfallUrl } from "../../../setup/consts.js";


export async function commanderCheck(commander:string) {
    try {
        const baseUrl = scryfallUrl;
        const headers = scryfallHeaders;

        commander = encodeURIComponent(commander)

        const fullUrl = `${baseUrl}/cards/named?fuzzy=${commander}`;
        // console.log(fullUrl)
        const scryFallRes:any = await axios.get(fullUrl, headers);

        // gå gjennom body for å sjå om:
        // typen er legend
        // commander legal
        // det er en creature, planeswalker eller vehicle
        // probably noe mer jeg hr glemt
        // hente kortets uri, navn, identitet, no mer?
        // console.log(scryFallRes)

        // kriterier på type line
        const types:RegExp[] = [
            /LEGEND/,
            /PLANESWALK/,
            /VEHICLE/,
            /SPACECRAFT/,
            /CREATURE/,
        ]

        let validityCheck:boolean = false;

        
        // den er nødt til å være legendary uavhengig av type
        const legend:boolean = types[0].test(scryFallRes.data.type_line.toUpperCase());

        if (legend) {
            // litt cursed å begynne med i=1, men tihi
            for (let i=1;types.length>i;i++) {
                const check:boolean = types[i].test(scryFallRes.data.type_line.toUpperCase());
                // console.log("---------------------------------------");
                // console.log("testing card type");
                // console.log("regex test:", types[i]);
                // console.log("card type: ", scryFallRes.data.type_line);
                // console.log("result: ", check);
                if (check==true) {
                    validityCheck=true;
                    break;
                }
            }
        }
        

        const checkResponse = {
            name: scryFallRes.data.name,
            uri: scryFallRes.data.uri,
            colorIdentity: scryFallRes.data.color_identity,
            type: scryFallRes.data.type_line,
            legality: scryFallRes.data.legalities.commander,
            validCommander: validityCheck,
            entireCard: scryFallRes.data
        }

        return checkResponse;
        
    } catch(err:any) {
        throw ({message:"Error in commanderCheck", err});
    }
}