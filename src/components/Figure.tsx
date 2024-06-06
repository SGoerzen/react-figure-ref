import React from "react";

export interface FigureProps {
    src: string;
    caption: React.ReactElement;
    label?: string
}

export function Figure({src, caption, label}: FigureProps) {
    label = (label ?? "").trim().split(" ").join("-");
    return <figure id={label}>
        <img src={src} alt={'Figure ' + label }/>
        <figcaption style={{textAlign: "center"}}>{caption}</figcaption>
    </figure>;
}