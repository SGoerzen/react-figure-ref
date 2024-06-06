import React from "react";
import { Figure } from "./components/Figure";
import { FigureRef } from "./components/FigureRef";
var FigureManager = /** @class */ (function () {
    function FigureManager(_a) {
        var figures = _a.figures, prefix = _a.prefix;
        var _this = this;
        this._figureNumber = 1;
        this._figures = {};
        this.FigureRef = function (_a) {
            var label = _a.label;
            var figure = _this._figures[label];
            return FigureRef({ children: _this._prefix + ' ' + figure.num, label: label });
        };
        this.Figure = function (_a) {
            var caption = _a.caption, label = _a.label;
            var figure = _this._figures[label];
            return Figure({ src: figure.src, caption: React.createElement("span", null,
                    React.createElement("strong", null,
                        _this._prefix + ' ' + figure.num,
                        ":"),
                    " ",
                    caption), label: label });
        };
        this._prefix = prefix !== null && prefix !== void 0 ? prefix : "Fig.";
        figures.forEach(function (_a) {
            var label = _a.label, imageSrc = _a.imageSrc;
            _this._figures[label] = { num: _this._figureNumber++, src: imageSrc };
        });
    }
    return FigureManager;
}());
export { FigureManager };
