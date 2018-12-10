import React from 'react';
import { Link, Route } from 'react-router-dom';

export default class CityName extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <h2 className="display-4">{this.props.name}</h2>
            </div>
        )
    }

}