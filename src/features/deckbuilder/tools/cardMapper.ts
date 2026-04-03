import { card } from "../../../setup/types.js";


export function cardMapper(card:any):card {
    const commander = {
        name: card.name,
        uri: card.scryfall_uri,
        colorIdentity: card.color_identity.length? card.color_identity : ["C"],
        type: card.type_line,
        image: card.image_uris.normal
    }
    return commander;
}