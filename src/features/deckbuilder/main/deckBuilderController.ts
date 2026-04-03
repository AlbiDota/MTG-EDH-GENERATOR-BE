import { Request, Response } from "express";
import { commanderCheck } from "../commanderHandler/commanderCheck.js";
import { card } from "../../../setup/types.js";
import { deckBuilder } from "./mainDeckBuilder.js";



export async function deckBuilderController(req:Request, res:Response) {
    try {
        const colors = req.query?.colors;
        const edh = req.query?.commander;

        let colorId:string[] = [];

        if (!colors && !edh) {
            return res.status(400).json({message: "submit either colors or commander"});
        }

        if (
            (!!edh && typeof edh != "string") || 
            (!!colors && typeof colors != "string")
        ) {
            return res.status(400).json({message: "input must be of type string"});
        }

        if (colors) {
            // colors bør være en string som er feks "wubrg"
            for (let i=0;colors.length>i;i++) {
                // console.log("color: ",colors[i]);
                colorId.push(colors[i].toUpperCase());
            }
        }

        let card:card | false = false;
        if (edh) {
            card = commanderCheck(edh);
            if (card) colorId = card.colorIdentity;
            // return res.status(200).json(card);
        }

        console.log("makin da deck",new Date().toLocaleString())
        const deck = deckBuilder(colorId, card);

        return res.status(deck?.status || 200).json(deck?.message || deck);

    } catch(err: any) {
        return res.status(err.response?.status || 500).json(err.message || err);
    }
}