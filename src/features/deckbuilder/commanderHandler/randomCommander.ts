import fs from 'fs';
import path from "path";
import { fileURLToPath } from "url";
import { card } from '../../../setup/types.js';
import MiniSearch from 'minisearch';
import { cardMapper } from '../tools/cardMapper.js';
import { cardLib } from '../../../setup/librarySetup.js';
import { randomInt } from '../tools/randomInt.js';

export async function randomCommander(colorIdentity:string[]):Promise<card> {
    const library:any[] = (await cardLib.getInstance()).library;

    const validTypes:RegExp = /(?=.*legend)(?=.*(planeswalker|vehicle|spacecraft|creature))/i
    let legends:any[] = library.filter((card:any) => validTypes.test(card.type_line) && card.legalities.commander == "legal");
    // console.log(legends.length);
    // hvis fargene kommer i any rekkefølge, så bør vi sortere!
    function normalize(c:string[]) {
        return [...c].sort().join(",");
    }

    legends = legends.filter((card:any) => 
        normalize(card.color_identity) == normalize(colorIdentity)
    );
    // console.log(legends.length);
    const int = randomInt(0,legends.length);
    // console.log(int);
    const commander:card = cardMapper(legends[int]);
    // console.log(commander);

    return commander;

}