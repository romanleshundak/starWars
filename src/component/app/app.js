import React,{Component} from 'react';
import Header from '../header/header';
import RandomPlanet from '../randome-planet/randome-planet';
import {SwapiServiceProvider} from "../swapi-service-context/swapi-service-context";
import SwapiServis from '../../services/swapi-service';
import './app.css';
import ErrorBoundry from "../error-boundry/error-boundry";
import {PersonPage, StarshipPage, PlanetPage} from "../pages/index";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {PlanetDetails} from "../sw-components";
import LoginPage from "../pages/login";
import SecretPage from "../pages/secret";


export default class App extends Component{
    state = {
        logged: false
    };
     swapiServis = new SwapiServis();

    onLogin = () => {
        this.setState({logged: true})
    };
    render() {
        const {logged} = this.state;
        return(

            <ErrorBoundry className="app">
                <SwapiServiceProvider value={this.swapiServis}>
                    <Router>
                        <div>
                            <Header/>
                            <RandomPlanet/>
                            <Switch>
                                <Route path="/" render={() => <h2>Welcome to StarDB </h2>} exact={true}/>
                                <Route path="/people/:id?" component={PersonPage}/>
                                <Route path="/planet" component={PlanetPage} exact/>
                                <Route path="/planet/:id" render={({match}) => {
                                    return <PlanetDetails itemId={match.params.id}/>
                                }}/>
                                <Route path="/starship" component={StarshipPage}/>
                                <Route path="/login" render={() => <LoginPage isLogged={logged} onLogin={this.onLogin}/>}/>
                                <Route path="/secret" render={() => <SecretPage isLogged={logged} />}/>
                                <Route render={() => <h2>this page not found</h2>}/>
                            </Switch>
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        )
    }

}