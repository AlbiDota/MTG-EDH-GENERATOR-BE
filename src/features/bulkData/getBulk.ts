import axios from "axios";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { scryfallHeaders } from "../../setup/consts.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sfUrl = "https://api.scryfall.com/bulk-data/default_cards?format=file"
const bulkPath = path.resolve(__dirname, 'library.json')

const sfHeaders = scryfallHeaders;

export async function downloadBulk() {
    try {
        let date = new Date().toISOString();

        console.log(date, "- downloading bulk data from scryfall api");
        
        const response = await axios({
            url: sfUrl,
            method: "GET",
            responseType: "stream",
            headers: sfHeaders
        });

        // this part is vibe coded af - never used this thing before
        await new Promise<void>((resolve, reject) => {
            date = new Date().toISOString();
            const fileWriter = fs.createWriteStream(bulkPath);
            response.data.pipe(fileWriter);
            fileWriter.on("finish", () => {
                console.log(date, `- saving data to ${bulkPath}`);
                resolve();
            });
            fileWriter.on("error", reject);
        });
        // ^^
    } catch (err:any) {
        console.error("Error in getBulk",err);
    }   

}