import React from 'react';
import * as _ from "lodash";
import * as moment from 'moment';
import './sys.css';

export default class Sys extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            sys: {}
        }
    }

    componentDidMount () {
        let sys = _.get(this.props, 'info');
        this.setState({sys});
    }

    render() {
        let sunset, sunrise;
        sunrise = _.get(this.state, 'sys.sunrise');
        sunset = _.get(this.state, 'sys.sunset');

        if (sunrise) {
            sunrise = moment.unix(+sunrise).format('hh:mm a');
        }

        if (sunset) {
            sunset = moment.unix(+sunset).format('hh:mm a');
        }

        return (
            <div className="sys">
                <div><span className="title">Sunrise: </span><span className="time">{sunrise}</span></div>
                <div><span className="title">Sunset: </span><span className="time">{sunset}</span></div>
            </div>
        )
    }

}