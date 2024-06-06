import React from "react";
export function FigureRef(_a) {
    var children = _a.children, label = _a.label;
    return React.createElement("a", { href: '#' + label }, children);
}
