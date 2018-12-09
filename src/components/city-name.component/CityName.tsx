import React from 'react';
import { Link, Route } from 'react-router-dom';

export class CityName extends React.Component<any> {

    constructor(props: any){
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