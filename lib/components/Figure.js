import React from "react";
export function Figure(_a) {
    var src = _a.src, caption = _a.caption, label = _a.label;
    label = (label !== null && label !== void 0 ? label : "").trim().split(" ").join("-");
    return React.createElement("figure", { id: label },
        React.createElement("img", { src: src, alt: 'Figure ' + label }),
        React.createElement("figcaption", { style: { textAlign: "center" } }, caption));
}
