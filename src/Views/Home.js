import React from "react";
import { Link } from "wouter";
import ListOfGifs from "../components/ListOfGifs/ListOfGifs";
import { useGifs } from "../hooks/useGifs";

const POPULAR_GIFS =["Matrix","Gatos", "Rick"]

export default function Home(){
    const {loading, gifs} = useGifs()


    return(
        <>
            <h1>Giffy</h1>
            <h3 className="App-title">Última búsqueda</h3>
            <ListOfGifs gifs={gifs}/>
            <h3 className="App-title">Lo gifs más populares</h3>
            <ul>
                {POPULAR_GIFS.map((popularGifs) => (
                    <li key={popularGifs}>
                        <Link to={`/search/${popularGifs}`}> Gifs de {popularGifs}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}