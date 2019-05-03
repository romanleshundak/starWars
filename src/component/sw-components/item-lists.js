import ItemList from "../item-list/item-list";
import SwapiService from "../../services/swapi-service";

import withData from "../hoc-helper/with-data";

const swapiService = new SwapiService();
const {getAllPlanets, getAllPerson, getAllStarships} = swapiService;

const PersonList = withData(ItemList, getAllPerson);
const PlanetList = withData(ItemList, getAllPlanets);
const StarshipList = withData(ItemList, getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList
}