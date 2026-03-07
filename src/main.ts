/**
* MTG commander deck generator backend
* 
* 
* @author Albert Einarssønn
*/

import * as dotenv from 'dotenv';
dotenv.config();
import { createServer } from './setup/serverSetup.js';


async function main() {
    try {
        const app = createServer();
        const PORT = process.env.PORT || 3001;

        app.listen(PORT, () => {
            console.log(`server running on port ${PORT}`);
        });

    } catch(err) {
        console.error(`error in main: `, err);
        process.exit(1);
    }
}

main();