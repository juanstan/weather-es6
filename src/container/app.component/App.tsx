import * as React from 'react';
import './App.css';
import { CityModel } from "../../models/CityModel";
import { City } from "../city.component/City";
import { Container, Row, Col } from 'reactstrap';
import CityList from './../../assets/cities.json';

export class App extends React.Component {
    public state: any;
    public cities: CityModel[];

    constructor(props: any) {
        super(props);
        this.state = {
            cities: CityList
        }
    }

    render() {
        return (
            <Container>
                <h1 className="display-3">Weather</h1>
                <p className="lead text-center">
                    <span>Meteorology conditions for 5 european countries</span>
                </p>
                <Row>
                    {
                        this.state.cities.map( (city: CityModel) => {
                            return (
                                <Col xs="12" lg="6">
                                    <City id={city.id} name={city.name} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        )
    }
}