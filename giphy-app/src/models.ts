import { Url } from "url";

export interface Giphy {
    "images": Image[]
}

export interface Image {
    "id": string,
    "source": Url,
    "height": number,
    "width": number,
    "url": Url,
}