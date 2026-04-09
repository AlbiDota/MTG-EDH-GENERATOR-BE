/**
* MTG commander deck generator backend
* 
* 
* @author Albert Einarssønn
*/
import * as dotenv from 'dotenv';
import { createServer } from './setup/serverSetup.js';
import { cronBulk } from './features/bulkData/cronBulk.js';
import { downloadBulk } from './features/bulkData/getBulk.js';
import fs from 'fs';
import path from "path";
dotenv.config();


async function main() {
    try {
        const app = await createServer();
        const PORT = process.env.PORT || 3001;

        app.listen(PORT, () => {
            console.log(`server running on port ${PORT}`);

            // vi prøver sånn her fix
            ensureLibrary();
            
        });

        cronBulk();

    } catch(err) {
        console.error(`error in main: `, err);
        process.exit(1);
    }
}

main();

// mekker library om den ikke finnes
async function ensureLibrary() {
    try {
        const fileExists = fs.existsSync("./features/bulkData/library.json");

        if (!fileExists) {
            console.log("library.json not found: starting download");

            downloadBulk()
                .then(() => console.log("library.json downloaded"))
                .catch(err => console.log("failed bulk download", err));
        }

    } catch(err:any) {
        console.error("error in backgroundTasks", err);
    }
}