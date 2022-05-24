import React from "react";
import { Link } from "wouter";
import Search from "../Search/Search";
import useUser from "../../hooks/useUser";

import './header.scss'

export default function Header(){
    const {isLogged, logout} = useUser()
    return (
        <header className="gf-header">
            <Search/>
            {
                isLogged
                    ? <button className="link" onClick={logout}> Logout</button>
                    : <Link className="link" to='/login'> Login</Link>
            }
        </header>
    )
}