export interface Giphy {
    "images": Image[]
}

export interface Image {
    "id": string,
    "source": string,
    "height": number,
    "width": number,
    "url": string,
}