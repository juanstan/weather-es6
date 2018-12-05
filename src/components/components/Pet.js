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
import React from 'react';
var Pet = /** @class */ (function (_super) {
    __extends(Pet, _super);
    function Pet(props) {
        return _super.call(this, props) || this;
    }
    Pet.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("span", { className: "name" }, "Its name is " + this.props.name),
            React.createElement("span", { className: "animal" }, "It is a " + this.props.animal),
            React.createElement("span", { className: "breed" }, "Its breed is " + this.props.breed)));
    };
    return Pet;
}(React.Component));
export { Pet };
//# sourceMappingURL=Pet.js.map