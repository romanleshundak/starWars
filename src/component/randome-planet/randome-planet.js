import React, {Component} from 'react';
import './randome-planet.css'
import ErrorComponent from '../error-component/error-component'
import SwapiService from '../../services/swapi-service'
import Spiner from '../spiner/spiner'

export default class RandomPlanet extends Component {
    swapiService = new SwapiService();
    state = {
        planet: {},
        loading: true,
        error: false
    };

    componentDidMount () {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 6000)
    }

    onPlanetLoad = (planet) => {
        this.setState({
            planet,
            loading: false
        })
    };
    randomId = () => {
        return Math.floor(Math.random() * 20 + 2)
    };

    componentWillUnmount () {
        clearInterval(this.interval)
    }

    onError = (e) => {
        this.setState({
            error: true,
            loading: false
        })
    };


    updatePlanet = () => {
        const id = this.randomId();
        this.swapiService.getPlanet(id)
            .then(this.onPlanetLoad)
            .catch(this.onError)
    };

    render() {
        const {planet: {id, name, population, rotationPeriod, diameter}, loading, error} = this.state;
        if (loading && !error) {
            return (<Spiner/>)
        } else if (error) {
            return (
                <ErrorComponent/>
            )
        }

        return (

            <div className="random_planet">
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=""/>

                <div>
                    <h3>{name}</h3>
                    <ul>
                        <li>
                            <span>Population</span> <br/>
                            <span>{population}</span>
                        </li>
                        <li>
                            <span>Rotation Period</span><br/>
                            <span>{rotationPeriod}</span>
                        </li>
                        <li>
                            <span>Diameter</span><br/>
                            <span>{diameter}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}