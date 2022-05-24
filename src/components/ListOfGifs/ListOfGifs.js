import React from "react";
import Gif from "../Gif/Gif";

import './listOfGifs.scss';

export default function ListOfGifs ({ gifs }){
    return (
        <div className="ListOfGifs">
            {
                gifs.map(({id, title, url}) =>
                <Gif
                key={id}
                title={title}
                url={url}
                />
                )
            }
        </div>
    )
}