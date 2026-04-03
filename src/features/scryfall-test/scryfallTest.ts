import axios from "axios";
import { Request, Response } from "express";
import { scryfallHeaders, scryfallHeaders2, scryfallUrl } from "../../setup/consts.js";


export async function scryfallTest(req:Request, res:Response) {
    try {
        let q = req.query?.q;

        const url = scryfallUrl;
        const headers = scryfallHeaders2;

        const finalUrl = `${url}/cards/named?fuzzy=${q}`;

        // console.log(finalUrl);

        const response = await axios.get(finalUrl, headers);

        return res.status(response.status || 200).json(response.data);

    } catch (err:any) {
        // console.log(err);
        return res.status(err.response?.status || 500).json({err:err?.message});
    }
}

// export async function scryfallTest(req:Request, res:Response) {
//     try {
//         let q = req.query?.q;

//         const url = "https://api.scryfall.com"

//         const finalUrl = `${url}/cards/named?fuzzy=${q}`;

//         // console.log(finalUrl);

//         const response = await axios.get(finalUrl, {
//             headers:{
//                 "User-Agent":"MTG-EDH-GENERATOR-BE/1.0",
//                 "Accept": "application/json"
//             },
//             // params: req.query
//         });

//         return res.status(response.status || 200).json(response.data);

//     } catch (err:any) {
//         // console.log(err);
//         return res.status(err.response?.status || 500).json({err:err?.message});
//     }
// }