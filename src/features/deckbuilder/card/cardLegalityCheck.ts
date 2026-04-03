

export function legality(card:any):boolean {

    if (card?.legalities?.commander == "legal") {
        return true;
    } else {
        return false;
    }

}