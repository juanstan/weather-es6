var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { Pet } from './../components/Pet';
var Results = /** @class */ (function (_super) {
    __extends(Results, _super);
    function Results(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            pets: []
        };
        return _this;
    }
    Results.prototype.componentDidMount = function () {
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
            pets: this.pets
        });
    };
    Results.prototype.render = function () {
        return (React.createElement("div", null, this.state.pets.map(function (pet) {
            return (React.createElement(Pet, { name: pet.name, animal: pet.animal, breed: pet.breed }));
        })));
    };
    return Results;
}(React.Component));
export { Results };
//# sourceMappingURL=Results.js.map