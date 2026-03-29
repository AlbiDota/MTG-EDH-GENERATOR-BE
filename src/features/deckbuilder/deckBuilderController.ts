import { Request, Response } from "express";
import { deckBuilder } from "./deckbuilder.js";
import { commanderCheck } from "./tools/commanderValidator.js";
import { commander } from "../../setup/types.js";


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

        // console.log(colors);
        if (colors) {
            // colors bør være en string som er feks "wubrg"
            for (let i=0;colors.length>i;i++) {
                // console.log("color: ",colors[i]);
                colorId.push(colors[i].toUpperCase());
            }
        }
        // console.log(colorId);

        // let commander:commander | false = false

        // hvis commander er oppgitt, må vi validere og hente fargene.
        if (edh) {
            const commanderInfo:commander = await commanderCheck(edh);
            // const commanderInfo = await commanderCheck(edh);

            // err hvis ulovlig på no vis
            if (
                commanderInfo.validCommander==false
                && colorId.length == 0
            ) {
                return res.status(400).json({message:"not a valid commander"})
            }

            colorId = commanderInfo.colorIdentity;
            const response = await deckBuilder(colorId, commanderInfo.entireCard);
            return res.status(200).json(response);
        }


        const response = await deckBuilder(colorId);
        return res.status(200).json(response);

    } catch(err: any) {
        return res.status(err.response?.status || 500).json(err.message || err);
    }
}