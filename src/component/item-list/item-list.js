import React,{Component} from 'react';
import './item-list.css'

export default class ItemList extends Component{
     renderItems(arr){
         return arr.map((item) => {
             const value = this.props.children(item);
                 return (
                     <li onClick={() => {this.props.onItemSelected(item.id)}} key={item.id}>
                         {value}
                     </li>
                 )
             }
         )
     }

    render(){

        const items = this.renderItems(this.props.data);

        return (
            <ul className="item_list">
                {items}
            </ul>
        )
    }
}
