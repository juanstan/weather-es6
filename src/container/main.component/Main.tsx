import React from 'react';
import * as _ from "lodash";
import * as moment from 'moment';
import './Main.css';
import { Container, Row, Col } from 'reactstrap';
import { Chart } from './../../components/chart.component/Chart';

export class Main extends React.Component<any> {
    public state: any;

    constructor(props: any){
        super(props);
        this.state = {
            info: [],
            isFetching: true
        }
    }

    componentDidMount () {
        let id = _.get(this.props, 'id');
        if (id) {
            fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=bea13bffb38e3fec68db0481384e8bd4`)
                .then((response) => response.json())
                .then((cityForecast) => {
                    let forecast = _.get(cityForecast, 'list').filter(
                       (dayForcast: any) => moment(dayForcast.dt_txt).format('hh:mm a') === '09:00 am'
                    );
                    this.setState({
                        info:  forecast,
                        isFetching: false
                    });
                });
        }
    }

    render() {
        return (
            <div className="text-center mt-4">
                <p className="font-weight-light font-italic">(Sea Level in the next 5 days)</p>
                <Row>
                {
                    this.state.info.map( (forecast: any) => {
                        return (
                            <Col>
                                <Row>
                                    <Col>
                                        <small>{moment(forecast.dt_txt).format('dddd')}
                                            <small className="font-weight-light font-italic block">
                                                ({moment(forecast.dt_txt).format('D MMM ha')})
                                            </small>
                                        </small>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="text-muted"><small>{forecast.main.sea_level}</small></Col>
                                </Row>
                            </Col>
                        )
                    })
                }
                </Row>
                { !this.state.isFetching ? <Chart info={this.state.info} /> : <span>Loading</span>}
            </div>
        )
    }

}