import React, {useState} from "react";
import { useLocation } from "wouter";

import { InputText } from "primereact/inputtext";

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
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={keyword} onChange={handleChange} placeholder="Search Gifs" />
                </span>
            </form>
    )
}