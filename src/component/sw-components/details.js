import React from 'react'
import ItemDetails, {Record} from "../item-details/item-details";
import {SwapiServiceConsumer} from "../swapi-service-context/swapi-service-context";

const PersonDetails = ({itemId}) =>{
    return (
        <SwapiServiceConsumer>
            {({getPerson, getPersonImg}) => {
                return (
                    <ItemDetails
                                itemId={itemId}
                                getData={getPerson}
                                getImg={getPersonImg}>
                        <Record fild="gender" lable="Gender"/>
                        <Record fild="eyeColor" lable="Eye color"/>
                    </ItemDetails>
                )
            }
            }
        </SwapiServiceConsumer>
    )
};
const PlanetDetails = ({itemId}) =>{
    return (
        <SwapiServiceConsumer>
            {({getPlanet, getPlanetImg}) => {
                return (
                    <ItemDetails
                        itemId={itemId}
                        getData={getPlanet}
                        getImg={getPlanetImg}

                    >
                        <Record fild="population" lable="Population"/>
                        <Record fild="rotationPeriod" lable="Rotation Period"/>
                        <Record fild="diameter" lable="Diameter"/>
                    </ItemDetails>
                )
            }}
        </SwapiServiceConsumer>

    )
};
const StarshipDetails = ({itemId}) =>{
    return (
        <SwapiServiceConsumer>
            {({getStarship, getStarshipImg}) => {
                return (
                    <ItemDetails
                        itemId={itemId}
                        getData={getStarship}
                        getImg={getStarshipImg}

                    >
                        <Record fild="model" lable="Model"/>
                        <Record fild="length" lable="Length"/>
                        <Record fild="passengers" lable="Passengers"/>
                    </ItemDetails>
                )
            }}
        </SwapiServiceConsumer>

    )
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}