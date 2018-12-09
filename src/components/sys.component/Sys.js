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
import './sys.css';
var Sys = /** @class */ (function (_super) {
    __extends(Sys, _super);
    function Sys(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            sys: {}
        };
        return _this;
    }
    Sys.prototype.componentDidMount = function () {
        var sys = _.get(this.props, 'info');
        this.setState({ sys: sys });
    };
    Sys.prototype.render = function () {
        var sunset, sunrise;
        sunrise = _.get(this.state, 'sys.sunrise');
        sunset = _.get(this.state, 'sys.sunset');
        if (sunrise) {
            sunrise = moment.unix(+sunrise).format('hh:mm a');
        }
        if (sunset) {
            sunset = moment.unix(+sunset).format('hh:mm a');
        }
        return (React.createElement("div", { className: "sys" },
            React.createElement("div", null,
                React.createElement("span", { className: "title" }, "Sunrise: "),
                React.createElement("span", { className: "time" }, sunrise)),
            React.createElement("div", null,
                React.createElement("span", { className: "title" }, "Sunset: "),
                React.createElement("span", { className: "time" }, sunset))));
    };
    return Sys;
}(React.Component));
export { Sys };
//# sourceMappingURL=Sys.js.map