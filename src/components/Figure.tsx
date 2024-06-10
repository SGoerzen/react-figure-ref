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
    align?: Property.TextAlign,

    autoPlay?: boolean;
    loop?: boolean;
}

export function Figure({src, caption, label, style, figureStyle, className, alt, align, width, maxWidth, autoPlay, loop}: FigureProps) {
    label = (label ?? "").trim().split(" ").join("-");

    const ext = src.split('.').pop()!.toLowerCase();

    const isImage = ["jpg", "jpeg", "png", "gif", "bmp", "svg"].includes(ext);
    const isVideo = ["mp4", "mov", "webm", "avi"].includes(ext);

    if (!isImage && !isVideo) {
        throw new Error("Invalid file extension " + ext);
    }

    return <div className={'figure ' + (className ?? "")} style={{position: "relative", textAlign: (align ?? "center"), ...style}}>
        <figure id={label} style={{width, maxWidth, display: "inline-block", ...figureStyle}}>

            {isImage && <img className="figure-image" src={src} alt={alt ?? 'Figure ' + label}/>}
            {isVideo && <video className="figure-video" src={src} autoPlay={autoPlay} loop={loop}>Your browser does not support the video tag.</video> }

            <figcaption className="figure-caption" style={{textAlign: "center"}}>{caption}</figcaption>
        </figure>
    </div>;
}