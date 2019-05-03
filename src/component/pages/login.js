import React from 'react'
import {Redirect} from 'react-router-dom'

const LoginPage = ({isLogged, onLogin}) => {

    if (isLogged) {
        return <Redirect to="/"/>
    }

    return (
        <div>
            <p>pleas login if you wont to see secret page</p>
            <button onClick={onLogin}>login</button>
        </div>
    )


};

export default LoginPage