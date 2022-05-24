import React from "react";
import './gifs.scss'

export default function Gif ({title, url, id}){
    return (
        <div className="gifContainer">
            <h4 className="title">{title}</h4>
            <img src={url} alt={title}/>
        </div>
        )
}