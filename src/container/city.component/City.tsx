import React from 'react';
import { Link, Route } from 'react-router-dom';
import * as _ from "lodash";
import { Weather } from "../../components/weather.component/Weather";
import { Sys } from "../../components/sys.component/Sys";
import { Main } from "../../components/main.component/Main";
import { CityName } from "../../components/city-name.component/CityName";
import { Card, CardBody, CardTitle, CardText, CardHeader, Button } from 'reactstrap';

export class City extends React.Component<any> {
    public state: any;
    private id: number;
    private name: string;

    constructor(props: any){
        super(props);
        this.state = {
            info: [],
            active: false,
            isFetching: true
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            active: !this.state.active
        });
    }

    componentDidMount () {
        this.id = _.get(this.props, 'id');
        this.name = _.get(this.props, 'name');

        if (this.id) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?id=${this.id}&appid=bea13bffb38e3fec68db0481384e8bd4`)
                .then((response) => response.json())
                .then((cityInfo) => {
                    this.setState({
                        info:  cityInfo,
                        isFetching: false
                    });
                });
        }
    }

    render() {
        return (
            <Card body className="text-center">
                <CardHeader><CityName id={this.id} name={this.name}/></CardHeader>
                <CardBody>
                    <CardTitle>
                    { !this.state.isFetching ? <Weather info={this.state.info.weather}  /> : <span>Loading</span>}
                    </CardTitle>
                    <CardText>
                    { !this.state.isFetching ? <Sys info={this.state.info.sys}  /> : <span>Loading</span>}
                    { !this.state.isFetching && this.state.active && <Main id={this.id} /> }
                    </CardText>
                </CardBody>
                <Button type="button" onClick={this.handleClick}>Check Sea Levels</Button>
            </Card>
        )
    }

}