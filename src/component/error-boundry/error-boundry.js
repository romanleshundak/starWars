import {Component} from "react";
import ErrorComponent from "../error-component/error-component";
import React from "react";

export default class ErrorBoundry extends Component {
    state = {
        hasError: false
    };

    componentDidCatch() {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <ErrorComponent/>
        }
        return this.props.children
    }
}