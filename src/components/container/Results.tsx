import * as React from 'react';
import { render } from 'react-dom';
import { Pet } from './../components/Pet';
import { PetModel } from './../interfaces/PetModel';

export class Results extends React.Component {

    public state: any;
    public pets: PetModel[];

    constructor(props: PetModel) {
        super(props);
        this.state = {
            pets: []
        }
    }

    componentDidMount() {
        this.pets = [
            {
                name: 'Luna',
                animal: 'dog',
                breed: 'Havanese'
            },
            {
                name: 'Pepper',
                animal: 'bird',
                breed: 'Cockatiel'
            },
            {
                name: 'Doink',
                animal: 'cat',
                breed: 'Mixed'
            }
        ];
        this.setState({
            pets:this.pets
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.pets.map( (pet: PetModel) => {
                        return (
                            <Pet name={pet.name} animal={pet.animal} breed={pet.breed} />
                        )
                    })
                }
            </div>
        )
    }
}