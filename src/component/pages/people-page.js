import React from 'react'
import Row from '../row/row'
import ErrorBoundry from '../error-boundry/error-boundry'
import {PersonList, PersonDetails} from "../sw-components";
import {withRouter} from 'react-router-dom'


const PersonPage = ({history, match}) => {
    const id = match.params.id;
        return (
            <ErrorBoundry>
                <Row left={
                    <PersonList onItemSelected={(itemId) => history.push(itemId)}>
                        {(item) => <span>{item.name}</span>}
                    </PersonList>
                } right={
                    <PersonDetails itemId={id}/>}
                />
            </ErrorBoundry>
        )
};

export default withRouter(PersonPage)