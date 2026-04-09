import fs from 'fs';
import path from "path";
import { fileURLToPath } from "url";
import { downloadBulk } from '../features/bulkData/getBulk.js';

export class cardLib {
    private static instance: cardLib | null = null;
    private _library: any;

    private constructor() {
        // idk om jeg trenger no her egt
    }

    private async init() {
        const filename = fileURLToPath(import.meta.url);
        const dirname = path.dirname(filename);
    
        const filePath = path.join(dirname, "../features/bulkData/library.json");

        // if (!fs.existsSync(filePath)) {
        //     console.log("could not find library.json");
        //     console.log("starting downloadBulk()");
        //     await downloadBulk();
        // }

        let library = JSON.parse(fs.readFileSync(filePath, "utf8"));
        console.log("library loading:",library.length,"cards parsed")
        library = library.filter((card:any) => card.object=="card" 
        && card.name 
        && card.image_uris 
        && card.scryfall_uri 
        && card.type_line 
        && card.lang=="en"
        && card.legalities
        )
        this._library = library;
    }

    static async getInstance():Promise<cardLib> {
        if(!cardLib.instance) {
            cardLib.instance = new cardLib();
            await cardLib.instance.init();
        }
        return cardLib.instance;
    }

    get library() {
        return this._library;
    }
}