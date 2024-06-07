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
import React from "react";
export function Figure(_a) {
    var src = _a.src, caption = _a.caption, label = _a.label, style = _a.style, figureStyle = _a.figureStyle, className = _a.className, alt = _a.alt, align = _a.align, width = _a.width, maxWidth = _a.maxWidth;
    label = (label !== null && label !== void 0 ? label : "").trim().split(" ").join("-");
    return React.createElement("div", { className: 'figure ' + (className !== null && className !== void 0 ? className : ""), style: __assign({ position: "relative", textAlign: (align !== null && align !== void 0 ? align : "center") }, style) },
        React.createElement("figure", { id: label, style: __assign({ width: width, maxWidth: maxWidth, display: "inline-block" }, figureStyle) },
            React.createElement("img", { className: "figure-image", src: src, alt: alt !== null && alt !== void 0 ? alt : 'Figure ' + label }),
            React.createElement("figcaption", { className: "figure-caption", style: { textAlign: "center" } }, caption)));
}
