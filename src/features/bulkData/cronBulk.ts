import cron from "node-cron";
import { downloadBulk } from "./getBulk.js";

//  # ┌────────────── second (optional)
//  # │ ┌──────────── minute
//  # │ │ ┌────────── hour
//  # │ │ │ ┌──────── day of month
//  # │ │ │ │ ┌────── month
//  # │ │ │ │ │ ┌──── day of week
//  # │ │ │ │ │ │
//  # │ │ │ │ │ │
//  # * * * * * *

export function cronBulk() {
    //sec, min, hour, dayOfMonth, month, dayOfWeek
    // cron.schedule("* * * * * sunday", async () => {
    cron.schedule("0 7 14 * * sunday", async () => {
        try {
            await downloadBulk();
        } catch(err:any) {
            console.error("error in cronBulk.ts: ",err);
        }
    });
}