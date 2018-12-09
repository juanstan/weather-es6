import React from 'react';
import * as _ from "lodash";
import { WeatherModel } from "../../models/Weather";

export class Weather extends React.Component<any> {
    public state: any;

    constructor(props: any){
        super(props);
        this.state = {
            weather: []
        }
    }

    componentDidMount () {
        let weather = _.get(this.props, 'info');
        this.setState({weather});
    }

    render() {
        return (
            <div>
                <div className="weather">
                    {
                        this.state.weather.map(
                            (condition: WeatherModel, i:number, arr:[]) => <span>{ condition.main } {(arr.length - 1 === i) ? '' : ', '}<span className="font-weight-light font-italic">({condition.description})</span></span>
                        )
                    }
                </div>
            </div>
        )
    }

}