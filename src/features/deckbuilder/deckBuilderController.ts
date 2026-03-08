import { Request, Response } from "express";
import { deckBuilder } from "./deckbuilder";
import { commanderCheck } from "./tools/commanderCheck.js";


export async function deckBuilderController(req:Request, res:Response) {
    try {
        const colors = req.query?.colors;
        const edh = req.query?.commander;

        if (!colors && !edh) {
            return res.status(400).json({error: "submit either colors or commander"});
        }

        if (
            (!!edh && typeof edh != "string") || 
            (!!colors && typeof colors != "string")
        ) {
            return res.status(400).json({message: "input must be of type string"});
        }

        if (edh) {
            const commanderInfo = await commanderCheck(edh);

            // err hvis ulovlig på no vis
            if (
                commanderInfo.validCommander==false
            ) {
                return res.status(400).json({message:"not a valid commander"})
            }

            return res.status(200).json(commanderInfo);
        }

        // const response = await deckBuilder(colors);

        // return res.status(200).json(response);

    } catch(err: any) {
        return res.status(err.response?.status || 500).json(err);
    }
}