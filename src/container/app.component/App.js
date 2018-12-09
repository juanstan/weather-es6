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
import './App.css';
import { City } from "../city.component/City";
import { Container, Row, Col } from 'reactstrap';
import CityList from './../../assets/cities.json';
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            cities: CityList
        };
        return _this;
    }
    App.prototype.render = function () {
        return (React.createElement(Container, null,
            React.createElement("h1", { className: "display-3" }, "Weather"),
            React.createElement("p", { className: "lead text-center" },
                React.createElement("span", null, "Meteorology conditions for 5 european countries")),
            React.createElement(Row, null, this.state.cities.map(function (city) {
                return (React.createElement(Col, { xs: "12", lg: "6" },
                    React.createElement(City, { id: city.id, name: city.name })));
            }))));
    };
    return App;
}(React.Component));
export { App };
//# sourceMappingURL=App.js.map