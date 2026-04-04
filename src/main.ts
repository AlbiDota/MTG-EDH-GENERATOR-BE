/**
* MTG commander deck generator backend
* 
* 
* @author Albert Einarssønn
*/

import * as dotenv from 'dotenv';
dotenv.config();
import { createServer } from './setup/serverSetup.js';
import { cronBulk } from './features/bulkData/cronBulk.js';


async function main() {
    try {
        const app = await createServer();
        const PORT = process.env.PORT || 3001;

        app.listen(PORT, () => {
            console.log(`server running on port ${PORT}`);
        });

        cronBulk();

    } catch(err) {
        console.error(`error in main: `, err);
        process.exit(1);
    }
}

main();