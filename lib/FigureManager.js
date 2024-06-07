var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
            var label = _a.label, props = __rest(_a, ["label"]);
            var figure = _this._figures[label];
            return FigureRef(__assign(__assign({}, props), { children: _this._prefix + ' ' + figure.num, label: label }));
        };
        this.Figure = function (_a) {
            var caption = _a.caption, label = _a.label, style = _a.style, className = _a.className, alt = _a.alt;
            var figure = _this._figures[label];
            return Figure({
                src: figure.src,
                caption: React.createElement("span", null,
                    React.createElement("strong", null,
                        _this._prefix + ' ' + figure.num,
                        ":"),
                    " ",
                    caption),
                label: label,
                style: style,
                className: className,
                alt: alt
            });
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
