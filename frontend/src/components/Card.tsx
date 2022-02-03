import "./Card.scss"
import React, {useState} from "react";

interface cardProps {
    key: string
    name: string
    id: string
    animal_type: string
    image_link: string
    latin_name: string
}

export default function Card(props: cardProps) {
    const [text, setText] = useState<string>('');
    const language: string = "de-de";
    //todo set key later in environment
    const key: string = "a7aae25de0b446c7adc2571316a7ddfc&";

    const srcString: string = "https://api.voicerss.org/?key="+key+"hl="+language+"&src=" + props.latin_name;
    return (
        <div className="card">
            {/*<h3>{props.name}</h3>*/}
            <img className="image" src={props.image_link} alt="Ein Bild"/>
            <React.Fragment>
                <h4>{props.latin_name}</h4>
                <audio autoPlay src={text} controls />
            </React.Fragment>
        </div>
    )
}