import React, {useState} from "react";
import { useLocation } from "wouter";

import './search.scss'


export default function Search (){
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation]= useLocation()
    
    const handleSubmit = evt =>{
        evt.preventDefault()
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = evt =>{
        setKeyword(evt.target.value)
    }

    return (
        <form className="formSearch" onSubmit={handleSubmit}>
                <input onChange={handleChange} type='text' value={keyword}/>
            </form>
    )
}