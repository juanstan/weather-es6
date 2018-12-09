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
import './Chart.css';
import { LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip, ResponsiveContainer } from 'recharts';
var Chart = /** @class */ (function (_super) {
    __extends(Chart, _super);
    function Chart(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            data: []
        };
        return _this;
    }
    Chart.prototype.getDataReady = function (info) {
        var data = [];
        data = info.map(function (detail) {
            var timeMoment = moment(detail.dt_txt);
            if (timeMoment.format('hh:mm a') === '09:00 am') {
                return { name: timeMoment.format('dddd'), 'sea-level': detail.main.sea_level };
            }
        });
        return data;
    };
    Chart.prototype.componentDidMount = function () {
        var info = _.get(this.props, 'info');
        var data = this.getDataReady(info);
        this.setState({ data: data });
    };
    Chart.prototype.render = function () {
        var finalData;
        if (this.state.data.length > 0) {
            finalData = this.state.data;
        }
        return (React.createElement("div", { className: "chart mt-5" },
            React.createElement(ResponsiveContainer, { width: 300, height: 150 },
                React.createElement(LineChart, { data: finalData },
                    React.createElement(XAxis, { dataKey: "name" }),
                    React.createElement(YAxis, null),
                    React.createElement(CartesianGrid, { stroke: "#eee", strokeDasharray: "5 5" }),
                    React.createElement(Tooltip, null),
                    React.createElement(Line, { type: "monotone", dataKey: "sea-level", stroke: "#8884d8" })))));
    };
    return Chart;
}(React.Component));
export { Chart };
//# sourceMappingURL=Chart.js.map