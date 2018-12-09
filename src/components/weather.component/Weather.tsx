import React from 'react';
import * as _ from "lodash";

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
        this.setState({weather:  weather});
    }

    render() {
        return (
            <div>
                <div className="weather">
                    {
                        this.state.weather.map(
                            (condition: any, i:number, arr:[]) => <span>{ condition.main } {(arr.length - 1 === i) ? '' : ', '}</span>
                        )
                    }
                </div>
            </div>
        )
    }

}