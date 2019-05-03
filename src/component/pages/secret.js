import React from 'react'
import {Redirect} from 'react-router-dom'


const SecretPage = ({isLogged}) => {
    if (isLogged) {
        return <h2>You can see secret document</h2>
    }
    return <Redirect to='/login'/>
};

export default SecretPage