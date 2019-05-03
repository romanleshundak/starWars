import React from 'react';
import './spiner.css'

export default class Spiner extends React.Component{
    render () {
        return (
            <div className="lds-css ng-scope">
                <div className="lds-pacman">
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>

        )
    }
}