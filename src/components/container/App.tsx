import * as React from 'react';
import { Router } from '@reach/router';
import { Results } from './Results';
import { Details } from './Details';

export class App extends React.Component {
    /*handleTitleClick() {
        alert('you clicked the title');
    }*/
    render() {
        return (
            <div>
                <h1>Adopt me!</h1>
                <Router>
                    <Results path="/" />
                    <Details path="/details/:id" />
                </Router>
            </div>
        )
    }
}