import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";
import useUser from "../hooks/useUser";

import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';

export default function Login (){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [, navigate] = useLocation()
    const {login, isLogged} = useUser()

    useEffect(() => {
        if (isLogged) navigate('/')
    }, [isLogged, navigate])

    const handleSubmit = (e) =>{
        e.preventDefault()
        localStorage.setItem('user', username);
        localStorage.setItem('password', password);
        login({ username, password})
    }

    return (
        <form onSubmit={handleSubmit}>
            <span className="p-float-label">
                    <InputText id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <label htmlFor="username">Username</label>
                </span>
                <Password value={password} onChange={(e) => setPassword(e.target.value)} toggleMask />
            <button>Login</button>
        </form>
    )
}