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
        const library = JSON.parse(fs.readFileSync(filePath, "utf8"));
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