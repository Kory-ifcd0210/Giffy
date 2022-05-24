import React, {useEffect, useState} from "react";
import { Link } from "wouter";
import Search from "../Search/Search";
import useUser from "../../hooks/useUser";
import { useLocation } from "wouter";

import { Dropdown } from 'primereact/dropdown';

import './header.scss'

export default function Header(){
    const {isLogged, logout} = useUser()
    const [, navigate] = useLocation()


    const [popularGifs, setPopularGifs] = useState(null);
    const POPULAR_GIFS =[
        {name: "Matrix"},
        {name: "Gatos"},
        {name: "Rick"},
    ]

    // useEffect(() => {
    //     setPopularGifs(popularGifs)
    // }, [])

    const onGifsChange = (e) => {
        navigate(`/search/${popularGifs}`)
    }


    return (
        <header className="gf-header">
            <Link className="link" to="/">Home</Link>
            {
                isLogged
                ? <button className="link" onClick={logout}> Logout</button>
                : <Link className="link" to='/login'> Login</Link>
            }
            <Search/>
            <Dropdown value={popularGifs} options={POPULAR_GIFS} onChange={onGifsChange} optionLabel="name" placeholder="Select a Category" />
        </header>
    )
}