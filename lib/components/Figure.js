import React from "react";
export function Figure(_a) {
    var src = _a.src, caption = _a.caption, label = _a.label, style = _a.style, className = _a.className, alt = _a.alt;
    label = (label !== null && label !== void 0 ? label : "").trim().split(" ").join("-");
    return React.createElement("figure", { id: label, style: style, className: className },
        React.createElement("img", { className: "figure-image", src: src, alt: alt !== null && alt !== void 0 ? alt : 'Figure ' + label }),
        React.createElement("figcaption", { className: "figure-caption", style: { textAlign: "center" } }, caption));
}
