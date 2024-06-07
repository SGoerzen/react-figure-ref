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
    var src = _a.src, caption = _a.caption, label = _a.label, style = _a.style, figureStyle = _a.figureStyle, className = _a.className, alt = _a.alt, align = _a.align, width = _a.width, maxWidth = _a.maxWidth, autoPlay = _a.autoPlay;
    label = (label !== null && label !== void 0 ? label : "").trim().split(" ").join("-");
    var ext = src.split('.').pop().toLowerCase();
    var isImage = ["jpg", "jpeg", "png", "gif", "bmp", "svg"].includes(ext);
    var isVideo = ["mp4", "mov", "webm", "avi"].includes(ext);
    if (!isImage && !isVideo) {
        throw new Error("Invalid file extension " + ext);
    }
    return React.createElement("div", { className: 'figure ' + (className !== null && className !== void 0 ? className : ""), style: __assign({ position: "relative", textAlign: (align !== null && align !== void 0 ? align : "center") }, style) },
        React.createElement("figure", { id: label, style: __assign({ width: width, maxWidth: maxWidth, display: "inline-block" }, figureStyle) },
            isImage && React.createElement("img", { className: "figure-image", src: src, alt: alt !== null && alt !== void 0 ? alt : 'Figure ' + label }),
            isVideo && React.createElement("video", { className: "figure-video", src: src, autoPlay: autoPlay }),
            React.createElement("figcaption", { className: "figure-caption", style: { textAlign: "center" } }, caption)));
}
