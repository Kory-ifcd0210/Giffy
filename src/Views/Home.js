import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import ListOfGifs from "../components/ListOfGifs/ListOfGifs";
import { useGifs } from "../hooks/useGifs";

const POPULAR_GIFS =["Matrix","Gatos", "Rick"]

export default function Home(){
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation]= useLocation()
    const {loading, gifs} = useGifs()

    const handleSubmit = evt =>{
        evt.preventDefault()
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = evt =>{
        setKeyword(evt.target.value)
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type='text' value={keyword}/>
            </form>
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