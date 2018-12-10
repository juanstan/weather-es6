import React from 'react';
import './App.css';
import City from "../city.component/City";
import { Container, Row, Col } from 'reactstrap';
import CityList from './../../assets/cities.json';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cities: CityList //will contain all cities
        }
    }

    render() {
        return (
            <Container>
                <h1 className="display-3">Weather</h1>
                <p className="lead text-center">
                    <span>Meteorology conditions for 5 european cities</span>
                </p>
                <Row>
                    {
                        this.state.cities.map( (city) => {
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