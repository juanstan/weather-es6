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
var Weather = /** @class */ (function (_super) {
    __extends(Weather, _super);
    function Weather(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            weather: []
        };
        return _this;
    }
    Weather.prototype.componentDidMount = function () {
        var weather = _.get(this.props, 'info');
        this.setState({ weather: weather });
    };
    Weather.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("div", { className: "weather" }, this.state.weather.map(function (condition, i, arr) { return React.createElement("span", null,
                condition.main,
                " ",
                (arr.length - 1 === i) ? '' : ', ',
                React.createElement("span", { className: "font-weight-light font-italic" },
                    "(",
                    condition.description,
                    ")")); }))));
    };
    return Weather;
}(React.Component));
export { Weather };
//# sourceMappingURL=Weather.js.map