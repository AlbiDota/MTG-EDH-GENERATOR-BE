import fs from 'fs';
import path from "path";
import { fileURLToPath } from "url";
import { card } from '../../../setup/types.js';
import MiniSearch from 'minisearch';
import { cardMapper } from '../tools/cardMapper.js';
import { cardLib } from '../../../setup/librarySetup.js';

export async function commanderCheck(name:string):Promise<any | false> {
    const library = (await cardLib.getInstance()).library;

    // const types:RegExp[] = [
    //         /LEGEND/,
    //         /PLANESWALK/,
    //         /VEHICLE/,
    //         /SPACECRAFT/,
    //         /CREATURE/,
    // ];
    const validTypes:RegExp = /(?=.*legend)(?=.*(planeswalker|vehicle|spacecraft|creature))/i
    const legends:any[] = library.filter((card:any) => validTypes.test(card.type_line) && card.legalities.commander == "legal");

    // let commander:card
    // for (let i=0;legends.length>i;i++) {
    //     if (legends[i]?.name == name) {
    //         const commander = {
    //             name: legends[i].name,
    //             uri: legends[i].scryfall_uri,
    //             colorIdentity: legends[i].color_identity || ["C"],
    //             type: legends[i].type_line,
    //             image: legends[i].image_uris.normal
    //         }
    //         return commander;
    //     }
    // }

    let commander:card
    // prøver minisearch fuzzy her
    // https://www.npmjs.com/package/minisearch
    // setup
    const miniSearch = new MiniSearch({
        fields: ["name"],       // fields to index
        storeFields: ["name","scryfall_uri","color_identity","type_line","image_uris"],  // fields to return
        searchOptions: {
            fuzzy: 0.15,           // fuzzy matching
        },
    });

    // legger inn legends
    miniSearch.addAll(legends);

    // søker
    const results = miniSearch.search(name);

    // treffer
    if (results.length>0) {
        const a = results[0];

        commander = cardMapper(a);
        return commander;
    }

    return false;
}