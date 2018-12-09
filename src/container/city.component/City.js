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
import * as _ from "lodash";
import { Weather } from "../../components/weather.component/Weather";
import { Sys } from "../../components/sys.component/Sys";
import { Main } from "../../components/main.component/Main";
import { CityName } from "../../components/city-name.component/CityName";
import { Card, CardBody, CardTitle, CardText, CardHeader, Button } from 'reactstrap';
var City = /** @class */ (function (_super) {
    __extends(City, _super);
    function City(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            info: [],
            active: false,
            isFetching: true
        };
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }
    City.prototype.handleClick = function () {
        this.setState({
            active: !this.state.active
        });
    };
    City.prototype.componentDidMount = function () {
        var _this = this;
        this.id = _.get(this.props, 'id');
        this.name = _.get(this.props, 'name');
        if (this.id) {
            fetch("http://api.openweathermap.org/data/2.5/weather?id=" + this.id + "&appid=bea13bffb38e3fec68db0481384e8bd4")
                .then(function (response) { return response.json(); })
                .then(function (cityInfo) {
                _this.setState({
                    info: cityInfo,
                    isFetching: false
                });
            });
        }
    };
    City.prototype.render = function () {
        return (React.createElement(Card, { body: true, className: "text-center" },
            React.createElement(CardHeader, null,
                React.createElement(CityName, { id: this.id, name: this.name })),
            React.createElement(CardBody, null,
                React.createElement(CardTitle, null, !this.state.isFetching ? React.createElement(Weather, { info: this.state.info.weather }) : React.createElement("span", null, "Loading")),
                React.createElement(CardText, null,
                    !this.state.isFetching ? React.createElement(Sys, { info: this.state.info.sys }) : React.createElement("span", null, "Loading"),
                    !this.state.isFetching && this.state.active && React.createElement(Main, { id: this.id }))),
            React.createElement(Button, { type: "button", onClick: this.handleClick }, "Check Sea Levels")));
    };
    return City;
}(React.Component));
export { City };
//# sourceMappingURL=City.js.map