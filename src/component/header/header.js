import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import './header.css'

export default class Header extends Component{
    render(){
        return (
            <div className="header">
                <h1><Link to="/">STAR WARS</Link></h1>
                <div>
                    <Link to="/people/">People</Link>
                    <Link to="/planet/">Planet</Link>
                    <Link to="/starship/">Starships</Link>
                    <Link to="/Login">Login</Link>
                    <Link to="/Secret">Secret Doc</Link>
                </div>
            </div>
        )
    }
}