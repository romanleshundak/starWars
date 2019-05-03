import React, {Component} from 'react';
import SwapiService from '../../services/swapi-service'
import './item-details.css'

const Record = ({item, fild, lable}) => {

    return (
        <li>
            <span>{lable}</span> <br/>
            <span>{item[fild]}</span>
        </li>
    )
};
export {Record}

export default class ItemDetails extends Component {
    swapiService = new SwapiService();

    state = {
        item: null,
        img: null
    };

    componentDidMount() {
        this.updatePerson()
    }

    componentDidUpdate(prevProps) {
        // console.log(this.state.personId);
        if (this.props.itemId !== prevProps.itemId) {
            this.updatePerson()

        }

    }

    updatePerson() {
        const {itemId, getData, getImg} = this.props;
        if (!itemId) {
            return
        }
        getData(itemId).then((item) => {
                this.setState({
                    item,
                    img: getImg(item)
                })
            }
        );
    }

    render() {
        if (!this.state.item) {
            return <h2>Select a item from a list</h2>
        }
        const {item} = this.state;

        return (
            <div className="person-details">
                <img src={this.state.img} alt=""/>
                <div>
                    <h3>{item.name}</h3>
                    <ul>
                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, {item})
                            })
                        }
                    </ul>
                </div>
            </div>

        )
    }
}