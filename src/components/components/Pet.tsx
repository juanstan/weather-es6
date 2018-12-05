import React from 'react';

export class Pet extends React.Component<any> {

    constructor(props: any){
        super(props);
    }

    render() {
        return (
            <div>
                <span className="name">{`Its name is ${this.props.name}`}</span>
                <span className="animal">{`It is a ${this.props.animal}`}</span>
                <span className="breed">{`Its breed is ${this.props.breed}`}</span>
            </div>
        )
    }

}