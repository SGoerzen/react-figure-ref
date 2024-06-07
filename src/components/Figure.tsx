import React, {CSSProperties} from "react";

import {Property} from "csstype";

export interface FigureProps {
    src: string;
    caption: React.ReactElement;
    label?: string;

    width?: Property.Width;
    maxWidth?: Property.MaxWidth;
    style?: CSSProperties;
    figureStyle?: CSSProperties;
    className?: string;
    alt?: string;
    align?: Property.TextAlign
}

export function Figure({src, caption, label, style, figureStyle, className, alt, align, width, maxWidth}: FigureProps) {
    label = (label ?? "").trim().split(" ").join("-");
    return <div className={'figure ' + (className ?? "")} style={{position: "relative", textAlign: (align ?? "center"), ...style}}>
        <figure id={label} style={{width, maxWidth, display: "inline-block", ...figureStyle}}>
            <img className="figure-image" src={src} alt={alt ?? 'Figure ' + label}/>
            <figcaption className="figure-caption" style={{textAlign: "center"}}>{caption}</figcaption>
        </figure>
    </div>;
}