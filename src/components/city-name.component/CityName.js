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
var CityName = /** @class */ (function (_super) {
    __extends(CityName, _super);
    function CityName(props) {
        return _super.call(this, props) || this;
    }
    CityName.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h2", { className: "display-4" }, this.props.name)));
    };
    return CityName;
}(React.Component));
export { CityName };
//# sourceMappingURL=CityName.js.map