
export interface commander {
    name: string,
    uri: string,
    colorIdentity: string[],
    type: string,
    legality: string,
    validCommander: boolean,
    entireCard: any
}

export interface card {
    name: string,
    uri: string,
    colorIdentity: string[],
    type: string,
    image: string
}