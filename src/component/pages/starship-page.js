import React, {Component} from 'react'
import Row from '../row/row'
import ErrorBoundry from '../error-boundry/error-boundry'
import {StarshipList, StarshipDetails} from "../sw-components";


export default class StarshipPage extends Component {
    state = {
        selectedItem: null,
    };
    onItemSelected = (id) => {
        this.setState({selectedItem: id});
    };

    render() {

        return (
            <ErrorBoundry>
                <Row left={
                    <StarshipList onItemSelected={this.onItemSelected}>
                        {(item) => <span>{item.name}</span>}
                    </StarshipList>
                } right={
                    <StarshipDetails itemId={this.state.selectedItem}/>}
                />
            </ErrorBoundry>
        )
    }
}