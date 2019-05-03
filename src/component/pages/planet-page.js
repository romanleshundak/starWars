import React from 'react'
import ErrorBoundry from '../error-boundry/error-boundry'
import {PlanetList} from "../sw-components";
import {withRouter} from 'react-router-dom'


const PlanetPage = ({history}) =>  {
        return (
            <ErrorBoundry>
                    <PlanetList onItemSelected={(itemid) => {
                        history.push(itemid)
                    }
                    }>
                        {(item) => <span>{item.name}</span>}
                    </PlanetList>
            </ErrorBoundry>
        )
};

export default withRouter(PlanetPage)