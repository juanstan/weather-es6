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
import * as moment from 'moment';
import './Main.css';
import { Row, Col } from 'reactstrap';
import { Chart } from './../../components/chart.component/Chart';
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            info: [],
            isFetching: true
        };
        return _this;
    }
    Main.prototype.componentDidMount = function () {
        var _this = this;
        var id = _.get(this.props, 'id');
        if (id) {
            fetch("http://api.openweathermap.org/data/2.5/forecast?id=" + id + "&appid=bea13bffb38e3fec68db0481384e8bd4")
                .then(function (response) { return response.json(); })
                .then(function (cityForecast) {
                var forecast = _.get(cityForecast, 'list').filter(function (dayForcast) { return moment(dayForcast.dt_txt).format('hh:mm a') === '09:00 am'; });
                _this.setState({
                    info: forecast,
                    isFetching: false
                });
            });
        }
    };
    Main.prototype.render = function () {
        return (React.createElement("div", { className: "text-center mt-4" },
            React.createElement("p", { className: "font-weight-light font-italic" }, "(Sea Level in the next 5 days)"),
            React.createElement(Row, null, this.state.info.map(function (forecast) {
                return (React.createElement(Col, null,
                    React.createElement(Row, null,
                        React.createElement(Col, null,
                            React.createElement("small", null,
                                moment(forecast.dt_txt).format('dddd'),
                                React.createElement("small", { className: "font-weight-light font-italic block" },
                                    "(",
                                    moment(forecast.dt_txt).format('D MMM ha'),
                                    ")")))),
                    React.createElement(Row, null,
                        React.createElement(Col, { className: "text-muted" },
                            React.createElement("small", null, forecast.main.sea_level)))));
            })),
            !this.state.isFetching ? React.createElement(Chart, { info: this.state.info }) : React.createElement("span", null, "Loading")));
    };
    return Main;
}(React.Component));
export { Main };
//# sourceMappingURL=Main.js.map