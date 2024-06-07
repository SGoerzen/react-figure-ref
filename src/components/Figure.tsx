import React, {CSSProperties} from "react";

export interface FigureProps {
    src: string;
    caption: React.ReactElement;
    label?: string;
    style?: CSSProperties;
    className?: string;
    alt?: string;
}

export function Figure({src, caption, label, style, className, alt}: FigureProps) {
    label = (label ?? "").trim().split(" ").join("-");
    return <figure id={label} style={style} className={className}>
        <img className="figure-image" src={src} alt={alt ?? 'Figure ' + label}/>
        <figcaption className="figure-caption" style={{textAlign: "center"}}>{caption}</figcaption>
    </figure>;
}