import fs from 'fs';
import path from "path";
import { fileURLToPath } from "url";

export class cardLib {
    private static instance: cardLib | null = null;
    private _library: any;

    private constructor() {
        const filename = fileURLToPath(import.meta.url);
        const dirname = path.dirname(filename);
    
        const filePath = path.join(dirname, "../features/bulkData/library.json");
        let library = JSON.parse(fs.readFileSync(filePath, "utf8"));
        console.log("library loading:",library.length,"cards parsed")
        library = library.filter((card:any) => card.object=="card" 
        && card.name && card.image_uris && card.scryfall_uri && card.type_line && card.lang=="en")
        this._library = library;
    }

    static getInstance():cardLib {
        if(!cardLib.instance) {
            cardLib.instance = new cardLib();
        }
        return cardLib.instance;
    }

    get library() {
        return this._library;
    }
}