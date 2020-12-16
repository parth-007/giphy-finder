import { Image } from "../src/models";

export interface GIFProps extends Image {

}

export function GIF(props: GIFProps) {
    return (
        <img className="img-class" height={props.height} width={props.width} src={props.url} key={props.id} alt={props.source} />
    );
}