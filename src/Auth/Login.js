import React from 'react'
import { useAuth } from '../Contexts/AuthContext'
import { useHistory } from 'react-router'
import './Auth.css'

export default function Login() {
    const {authenticate} = useAuth();
    const history = useHistory();

    async function handleAuth(){
        await authenticate();
        history.push('/');
    }

    return (
        <section className="login">
            <article>
                <h1 className="p-5 m-2 text-dark">Your To-Do Application</h1>
                <button className="btn btn-info" onClick={() => handleAuth()}>Login with GitHub</button>
            </article>
        </section>
    )
}
