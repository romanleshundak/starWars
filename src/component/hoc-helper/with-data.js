import {Component} from "react";
import Spiner from "../spiner/spiner";
import React from "react";

const withData = (View, getData) => {
    return class extends Component {
        state = {
            data: ''
        };

        componentDidMount ( ){
            getData().then((data) => {
                    this.setState({data})
                }
            )
        }



        render () {
            const {data} = this.state;
            if (!data) {
                return <Spiner/>
            }

            return <View {...this.props} data={data}/>
        }


    }
};

export default withData